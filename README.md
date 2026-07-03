# Antonello Salvo Torregrossa — Portfolio

Full-stack web application that showcases my skills, projects, education and experience as a Computer Engineering student.

**Tech stack:** Angular 21 · Express · Prisma · PostgreSQL · Docker · TypeScript

## Features

- Bilingual interface (Italian / English)
- RESTful API with PostgreSQL database
- Responsive design with SCSS
- Containerized with Docker Compose
- CI pipeline via GitHub Actions

## Pages

| Route | Content |
|---|---|
| `/` | Profile summary |
| `/curriculum` | Work experience & education |
| `/progetti` | Projects with tech tags |
| `/competenze` | Skills grouped by category |
| `/contatti` | Social links & contact |

## Getting Started

### Prerequisites

- Node.js 22+
- Docker (optional, for PostgreSQL)
- Angular CLI (`npm install -g @angular/cli`)

### Local setup

```bash
# 1. Start PostgreSQL
docker compose up db -d

# 2. Backend
cd backend
npm install
npx prisma db push
npx tsx prisma/seed.ts
npm run dev          # → http://localhost:3000

# 3. Frontend (new terminal)
cd frontend
npm install
npm start            # → http://localhost:4200
```

### Production-like (Docker)

```bash
docker compose up --build
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/profile?lang=it` | Profile with experiences & education |
| GET | `/api/projects?lang=it` | All projects |
| GET | `/api/projects/:id` | Single project |
| GET | `/api/skills?lang=it` | Skills grouped by category |
| GET | `/api/social` | Social links |

## License

MIT
