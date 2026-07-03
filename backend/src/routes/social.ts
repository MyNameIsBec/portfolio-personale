import { Router } from 'express';
import { getSocialLinks } from '../controllers/social';

export const socialRouter = Router();

socialRouter.get('/', getSocialLinks);
