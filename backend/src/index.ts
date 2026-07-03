import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { profileRouter } from './routes/profile';
import { projectsRouter } from './routes/projects';
import { skillsRouter } from './routes/skills';
import { socialRouter } from './routes/social';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  methods: ['GET'],
}));

app.use(express.json());

app.use('/api/profile', profileRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/social', socialRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
