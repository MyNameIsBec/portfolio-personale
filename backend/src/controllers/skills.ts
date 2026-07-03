import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { stripEnFields } from '../lib/clean';

const prisma = new PrismaClient();

export async function getSkills(req: Request, res: Response) {
  try {
    const lang = req.query.lang === 'en' ? 'en' : 'it';
    const skills = await prisma.skill.findMany({
      orderBy: [{ category: 'asc' }, { order: 'asc' }],
    });

    const mapped = lang === 'en'
      ? skills.map(s => ({
          ...s,
          name: s.name_en ?? s.name,
          category: s.category_en ?? s.category,
          description: s.description_en ?? s.description,
        }))
      : skills;

    const grouped = stripEnFields(mapped).reduce<Record<string, typeof mapped>>((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
