import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { stripEnFields } from '../lib/clean';

const prisma = new PrismaClient();

export async function getProjects(req: Request, res: Response) {
  try {
    const lang = req.query.lang === 'en' ? 'en' : 'it';
    const projects = await prisma.project.findMany({
      orderBy: { order: 'asc' },
    });

    const mapped = lang === 'en'
      ? projects.map(p => ({
          ...p,
          title: p.title_en ?? p.title,
          description: p.description_en ?? p.description,
        }))
      : projects;

    res.json(stripEnFields(mapped));
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getProject(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid project ID' });
      return;
    }

    const project = await prisma.project.findUnique({ where: { id } });

    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    const lang = req.query.lang === 'en' ? 'en' : 'it';
    const result = lang === 'en'
      ? {
          ...project,
          title: project.title_en ?? project.title,
          description: project.description_en ?? project.description,
        }
      : project;

    res.json(stripEnFields(result));
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
