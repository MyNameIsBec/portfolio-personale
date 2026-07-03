import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getSocialLinks(_req: Request, res: Response) {
  try {
    const links = await prisma.socialLink.findMany({
      orderBy: { order: 'asc' },
    });
    res.json(links);
  } catch (error) {
    console.error('Error fetching social links:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
