### Edulearn MERN + Prisma (Supabase Postgres)

This repository converts the provided static `index.html` into a full MERN-style stack:
- React + Vite + TailwindCSS frontend (apps/client) with modular sections/pages, transitions, and smooth scrolling.
- Express backend (apps/server).
- Prisma ORM with Postgres (Supabase-ready) for dynamic Events data.

#### Monorepo Structure
- apps/
  - client/ – React + Vite + Tailwind app
  - server/ – Express API + Prisma
- index.html – original static template (left intact for reference)

#### Prerequisites
- Node.js 18+
- An existing Supabase project with a Postgres database

#### Backend Setup (Prisma + Supabase)
1. Copy env template and set your Supabase connection string:
   - `apps/server/.env.example` -> `apps/server/.env`
   - Set `DATABASE_URL` to your Supabase Postgres URL, for example:
     `postgresql://postgres:<PASSWORD>@db.<supabase-ref>.supabase.co:5432/postgres?sslmode=require`
   - Optionally set `PORT=4000`.

2. Install dependencies and generate Prisma client:
   - From project root: `npm install`
   - Then generate: `npm run generate -w apps/server`

3. Create DB schema (initial migration) and seed sample data:
   - `npm run migrate -w apps/server`
   - `npm run seed -w apps/server`

API endpoints:
- `GET /api/health` – health check
- `GET /api/events` – list events
- `GET /api/events/:id` – event details

#### Frontend Setup (React + Vite + Tailwind)
- Tailwind is configured with smooth scrolling (see `apps/client/src/styles.css`).
- The app includes modular sections and pages inspired by the original `index.html`:
  - Navbar (sticky, mobile menu)
  - Sections on Home: Hero, About, Courses, Events (dynamic via API), Instructors, Testimonials, Contact
  - Pages: `/courses`, `/events`, `/events/:id`
- Vite dev server proxies `/api` to the backend on `http://localhost:4000`.

#### Run in Development
From the repository root:

- Install deps: `npm install`
- Start both servers concurrently: `npm run dev`
  - Client: http://localhost:5173
  - Server: http://localhost:4000

If you prefer running individually:
- Backend: `npm run dev -w apps/server`
- Frontend: `npm run dev -w apps/client`

#### Notes on Design and Transitions
- Tailwind utility classes provide hover effects, transitions, and subtle animations (e.g., pulse placeholders, hover scaling for images, smooth scroll).
- You can further enhance animations using Tailwind or a library like Framer Motion.

#### Customization
- Update theme colors in `apps/client/tailwind.config.js`.
- Modify sections/components under `apps/client/src/sections` and `apps/client/src/ui/components`.
- Extend Prisma schema `apps/server/prisma/schema.prisma` for more entities (Courses, Instructors, etc.).

#### Production Build
- Frontend: `npm run build -w apps/client` (outputs `dist/`). Serve with your preferred static host.
- Backend: Ensure `DATABASE_URL` is set and run `node src/server.js` inside `apps/server`.

#### Keeping the Original Template
- The original `index.html` remains in the repo root for reference.

#### Troubleshooting
- If Prisma complains about SSL with Supabase, ensure `?sslmode=require` is present in `DATABASE_URL`.
- After schema edits, run `npm run migrate -w apps/server` and `npm run generate -w apps/server`.