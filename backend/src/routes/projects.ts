import { Router } from 'express';
import { getProjects, getProject } from '../controllers/projects';

export const projectsRouter = Router();

projectsRouter.get('/', getProjects);
projectsRouter.get('/:id', getProject);
