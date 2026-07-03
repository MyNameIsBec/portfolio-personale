import { Router } from 'express';
import { getSkills } from '../controllers/skills';

export const skillsRouter = Router();

skillsRouter.get('/', getSkills);
