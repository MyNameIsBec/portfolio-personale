import { Router } from 'express';
import { getProfile } from '../controllers/profile';

export const profileRouter = Router();

profileRouter.get('/', getProfile);
