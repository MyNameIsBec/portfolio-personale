import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { stripEnFields } from '../lib/clean';

const prisma = new PrismaClient();

export async function getProfile(req: Request, res: Response) {
  try {
    const profile = await prisma.profile.findFirst({
      include: {
        experiences: { orderBy: { order: 'asc' } },
        educations: { orderBy: { order: 'asc' } },
      },
    });

    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }

    const lang = req.query.lang === 'en' ? 'en' : 'it';

    const result = lang === 'en'
      ? {
          ...profile,
          role: profile.role_en ?? profile.role,
          summary: profile.summary_en ?? profile.summary,
          location: profile.location_en ?? profile.location,
          educations: profile.educations.map(edu => ({
            ...edu,
            institution: edu.institution_en ?? edu.institution,
            degree: edu.degree_en ?? edu.degree,
            field: edu.field_en ?? edu.field,
          })),
        }
      : profile;

    res.json(stripEnFields(result));
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
