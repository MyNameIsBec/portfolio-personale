# TODO — Portfolio Personale

## 1. Personalizzare i dati (seed)

- [ ] Aprire `backend/prisma/seed.ts`
- [ ] Sostituire "Mario Rossi" con nome e cognome reali
- [ ] Aggiornare email, telefono, città
- [ ] Scrivere un summary personale (chi sei, cosa cerchi)
- [ ] Aggiungere link GitHub e LinkedIn reali
- [ ] Sostituire le esperienze lavorative con le tue
- [ ] Sostituire la formazione con i tuoi studi
- [ ] Modificare le skill con le tue competenze reali
- [ ] Aggiungere/rimuovere progetti personali
- [ ] Popolare i social link

## 2. Avviare il database e popolarlo

- [ ] Avviare PostgreSQL (locale o con Docker)
- [ ] Eseguire `npx prisma db push` per creare le tabelle
- [ ] Eseguire `npx prisma db seed` per popolare i dati
- [ ] Verificare con `npx prisma studio` (interfaccia grafica)

## 3. Avviare il backend in locale

- [ ] `cd backend && npm run dev`
- [ ] Testare gli endpoint:
  - `curl http://localhost:3000/api/health`
  - `curl http://localhost:3000/api/profile`
  - `curl http://localhost:3000/api/projects`
  - `curl http://localhost:3000/api/skills`

## 4. Avviare il frontend in locale

- [ ] `cd frontend && npm start`
- [ ] Aprire `http://localhost:4200`
- [ ] Verificare tutte le pagine: Home, Curriculum, Progetti, Competenze, Contatti
- [ ] Verificare che i dati arrivino correttamente dal backend

## 5. Testare con Docker (produzione-like)

- [ ] Eseguire `docker-compose up --build`
- [ ] Verificare che backend + database siano operativi
- [ ] Testare API su `http://localhost:3000`
- [ ] Fermare con `docker-compose down`

## 6. Migliorie estetiche e funzionali

- [ ] **Avatar/foto profilo** — aggiungere una foto nella Home
- [ ] **Icone social** — aggiungere icone (Font Awesome o SVG) per GitHub, LinkedIn, email
- [ ] **Badge "In corso"** — per esperienze/educazioni correnti
- [ ] **Ordinamento curriculum** — assicurarsi che esperienze e formazione siano in ordine cronologico inverso
- [ ] **Link diretto ai progetti** — se `liveUrl` è presente, mostrare il link funzionante
- [ ] **Tag delle tech skill** — nei progetti, mostrare i tag con colori diversi per categoria
- [ ] **Responsive** — verificare che il layout funzioni su mobile
- [ ] **Tema chiaro/scuro** — aggiungere un toggle (bonus)

## 7. Versionamento con Git

- [x] `git init`
- [x] `git add .`
- [x] `git commit -m "Initial commit: portfolio Angular + Express + Prisma + Docker"`
- [x] Creare repo su GitHub (da interfaccia web)
- [x] Collegare locale a remoto:
  ```bash
  git remote add origin https://github.com/MyNameIsBec/portfolio-personale.git
  git branch -M main
  git push -u origin main
  ```

## 8. Deploy

- [ ] **Frontend su Vercel:**
  - Andare su [vercel.com](https://vercel.com) e importare il repo
  - Root directory: `frontend`
  - Framework: Angular
  - Build command: `npm run build`
  - Output directory: `dist/frontend`

- [ ] **Backend su Railway:**
  - Andare su [railway.com](https://railway.com) e importare il repo
  - Root directory: `backend`
  - Start command: `npm start`
  - Aggiungere variabili d'ambiente:
    - `DATABASE_URL` → URL del PostgreSQL di Railway
    - `PORT` → 3000
    - `FRONTEND_URL` → URL del frontend su Vercel

- [ ] **Oppure tutto su un VPS con Docker:**
  - Copiare i file sul server
  - Eseguire `docker-compose up --build -d` (modalità detached)
  - Configurare Nginx come reverse proxy
  - Aggiungere SSL con Certbot

- [ ] **Configurare dominio personalizzato** (es. `tuonome.dev`)

## 9. GitHub Actions (CI/CD)

- [ ] Spingere il codice su GitHub (dal passo 7)
- [ ] Verificare che il workflow `.github/workflows/ci.yml` parta automaticamente
- [ ] Controllare che i check passino (backend build, frontend build)
- [ ] (Opzionale) Aggiungere deploy automatico dopo CI:
  - Deploy frontend su Vercel via GitHub Actions
  - Deploy backend su Railway via GitHub Actions

## 10. Rifiniture finali

- [ ] **Meta tag SEO** — aggiornare title, description, og:image in `index.html`
- [ ] **404 page** — creare una pagina personalizzata per rotte inesistenti
- [ ] **Loading state** — mostrare scheletri/spinner mentre i dati arrivano dal backend
- [ ] **Error state** — gestire gracefully quando il backend non risponde
- [ ] **Test** — aggiungere test con Jasmine/Karma (frontend) e Jest (backend)
- [ ] **Aggiungere il progetto al profilo GitHub** — pinnare la repo
- [ ] **Aggiungere il link del portfolio** su LinkedIn, curriculum, biglietti da visita
