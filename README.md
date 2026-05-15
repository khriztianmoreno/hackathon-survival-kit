# Hackathon Survival Kit · DemoDay

A tiny Next.js 14 project built as the live demo for the talk
**"Kit de Supervivencia para Hackathons: construye veloz y desbloquea con IA"**.

The app itself (DemoDay — a wall of weekend hackathon projects) is just the
canvas. Each demo block of the talk targets a deliberate gap or rough spot
in this codebase.

> 🎯 Talk goal: in 50 minutes the audience should walk out knowing that
> Antigravity + Chrome DevTools MCP + Agent Manager are not three tools,
> they are three reflexes that fit in one hour of build time.

---

## Quickstart

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

That's it. No DB, no auth, no env vars required to run.
The instructor can optionally fill `.env.example` for the Pillar 3a Supabase
demo.

---

## The three pillars (mapped to the code)

### Pillar 1 · Prototipado visual ultrarrápido

> "Don't start from scratch. Paste a screenshot, get the JSX."

**Target file:** [`components/pitch-section.tsx`](components/pitch-section.tsx)

The landing page renders a section called **"Drop a screenshot here. Watch
it become code."** It is a deliberate empty placeholder. On stage:

1. Open any visually striking reference (Stripe pricing, Linear feature
   page, a Dribbble shot, even a competitor landing).
2. Screenshot it.
3. Paste the screenshot into Antigravity and prompt Gemini 3 Pro:

   > *"Recrea la sección de la imagen dentro de `components/pitch-section.tsx`,
   > usando Tailwind y los colores `signal-orange`, `signal-violet` y `signal-cyan`
   > definidos en `tailwind.config.ts`. Mantén el id del section como `pitch`."*

4. Refresh the page — the hole fills in live.

**Bonus** — show **Playgrounds**: spawn a second window with a wild idea
("turn this into a 3D card grid with `react-three-fiber`") without
touching the main repo. Mention it as the "safe sandbox while the main
clock keeps running".

---

### Pillar 2 · Resolución instantánea de bloqueos

> "DevTools + MCP turn a 20-minute bug into a 20-second fix."

#### 2a · CSS bug: invisible status pill

**Target file:** [`components/hero.tsx`](components/hero.tsx) — line with
`bg-white px-3 py-1.5 text-xs font-semibold text-white`.

The hero has a "12 teams shipping live" pill where text color matches the
background → it looks like an empty white capsule.

**Demo flow:**

1. Open `http://localhost:3000`. Audience sees the broken pill at the top.
2. Open Chrome DevTools, inspect the element. Show `color: rgb(255,255,255)`
   on top of `background-color: rgb(255,255,255)`.
3. In the inspector, edit `color` to something like `#080812` — text appears.
4. Ask Antigravity:

   > *"En `components/hero.tsx` el píldoro de status tiene texto blanco
   > sobre fondo blanco. Aplica el cambio de color que probé en el
   > inspector: el texto debe usar un tono oscuro (`text-ink-950`) para
   > contrastar con el fondo blanco."*

5. The agent reads the file, finds the conflicting Tailwind classes and
   replaces `text-white` with `text-ink-950`.

#### 2b · Network bug: login form posts to a typo'd route

**Target files:**
[`app/login/page.tsx`](app/login/page.tsx) — fetches `/api/lgoin`
[`app/api/login/route.ts`](app/api/login/route.ts) — exists at `/api/login`

**Demo flow:**

1. Visit `/login`. Fill any email + password. Click *Sign in*.
2. The UI shows: *"Server responded 404. Check the Network tab."*
3. Open DevTools → Network → see `POST /api/lgoin` returning **404**.
4. Ask Antigravity:

   > *"El form de `/login` está dando 404 al enviar. Mira la pestaña de
   > Network en Chrome y el árbol de rutas en `app/api/`, identifica el
   > problema y arréglalo."*

5. The agent finds the typo in `app/login/page.tsx` (`/api/lgoin` →
   `/api/login`), patches it, and the login now responds 200.

---

### Pillar 3 · Multiplicar las manos del equipo

> "Open the Agent Manager. Spawn parallel agents. One does the DB, another
> writes the pitch, you keep coding."

#### 3a · Database & backend: Supabase MCP

**Target files:**
- [`lib/mocks/projects.ts`](lib/mocks/projects.ts) — 8 hardcoded projects.
- [`lib/types.ts`](lib/types.ts) — `Project` interface, the source of truth.
- [`supabase/schema.sql`](supabase/schema.sql) — empty stub with detailed
  instructions for the secondary agent.
- [`app/api/projects/route.ts`](app/api/projects/route.ts) — currently
  imports the mock; the parallel agent rewires it to Supabase.

**Demo flow:**

1. Open the Agent Manager and create a new sub-agent. Give it this prompt:

   > *"Lee `lib/mocks/projects.ts` y `lib/types.ts`. Usando el MCP de
   > Supabase, crea una tabla `projects` con el mismo shape (incluye un enum
   > para `category` y una columna `votes`). Llena `supabase/schema.sql`
   > con el SQL de la migración. Después siembra la tabla con los 8
   > registros del mock. Como último paso, actualiza
   > `app/api/projects/route.ts` para que el GET lea de Supabase en vez del
   > mock. Avisa cuando termines."*

2. Move on with the rest of the talk. The agent works in background.
3. Come back at the end, check the diff, redeploy.

#### 3b · Marketing copy: parallel writer agent

**Target file:** [`components/about-section.tsx`](components/about-section.tsx)
— three paragraphs marked `[PLACEHOLDER PARAGRAPH]`.

**Demo flow:** spawn another sub-agent in the Agent Manager with:

> *"En `components/about-section.tsx` hay tres párrafos marcados como
> placeholder. Reescríbelos como copy de marketing pulido para una
> landing de showcase de hackathons. Tono: cercano, levemente irreverente,
> pero serio sobre el oficio. 60-80 palabras por párrafo. No toques los
> headings ni la estructura."*

Show how both agents finish around the same time while the main session
worked on Pillar 2 fixes. **That's the multiplication moment.**

---

## Talk timeline (50 min)

| Min | Block | What happens |
|-----|-------|--------------|
| 0–4 | Intro · "El tiempo es el recurso más valioso" | Quick tour of DemoDay landing. Show the broken pill, mention "vamos a arreglarlo en vivo". |
| 4–8 | Setup | `pnpm dev`, connect Antigravity + Chrome DevTools MCP, verify with a one-shot ping. |
| 8–22 | **Pillar 1** · Build the missing section | Paste reference screenshot, watch Gemini 3 Pro fill in `pitch-section.tsx`. Mention Playgrounds. |
| 22–34 | **Pillar 2** · Unblock 2 bugs in 12 min | Fix the CSS pill (2a), then fix the login 404 (2b) using DevTools as the diagnostic surface. |
| 34–46 | **Pillar 3** · Delegate in parallel | Open Agent Manager. Spawn one agent on Supabase schema + seed, another on marketing copy. Show both diffs at the end. |
| 46–50 | Cierre + Q&A | Recap: "tres reflejos, una hora de build". |

---

## Suggested prompts cheatsheet

**Pillar 1:**
> *"Toma la imagen pegada arriba. Recreala dentro de
> `components/pitch-section.tsx` con Tailwind. Usa los colores `signal-*`
> del `tailwind.config.ts`. Conserva el `id="pitch"`."*

**Pillar 2a:**
> *"En `components/hero.tsx`, la 'live status pill' tiene fondo blanco y
> texto blanco. Cambia el texto a un tono oscuro (`text-ink-950`) para
> que sea legible."*

**Pillar 2b:**
> *"El form de `/login` da 404. Mira la pestaña Network, revisa la URL
> del fetch en `app/login/page.tsx` y compárala con las rutas en
> `app/api/`. Arregla el typo."*

**Pillar 3a (sub-agent):**
> *"Usando el Supabase MCP, crea la tabla `projects` con el shape de
> `lib/types.ts`, seedeala con `lib/mocks/projects.ts`, escribe la
> migración en `supabase/schema.sql` y reemplaza el handler GET de
> `app/api/projects/route.ts` para que lea de Supabase."*

**Pillar 3b (sub-agent):**
> *"En `components/about-section.tsx`, reescribe los tres párrafos
> placeholder como copy de marketing. Tono cercano, 60-80 palabras
> cada uno. No toques los headings."*

---

## Folder layout

```
app/
  page.tsx              # landing (Header + Hero + Grid + Pitch + About + Footer)
  login/page.tsx        # ⚠️ Pillar 2b — fetches /api/lgoin (typo)
  api/
    login/route.ts      # the real login endpoint, returns 200
    projects/route.ts   # ⚠️ Pillar 3a — rewire to Supabase during demo
  layout.tsx
  globals.css
components/
  site-header.tsx
  hero.tsx              # ⚠️ Pillar 2a — invisible status pill
  projects-grid.tsx
  project-card.tsx
  pitch-section.tsx     # ⚠️ Pillar 1 — empty stub for the screenshot demo
  about-section.tsx     # ⚠️ Pillar 3b — placeholder copy for parallel writer agent
  footer.tsx
lib/
  types.ts              # Project interface (canonical shape)
  utils.ts
  mocks/projects.ts     # ⚠️ Pillar 3a — migrate this into Supabase
supabase/
  schema.sql            # ⚠️ Pillar 3a — empty stub for the secondary agent
public/
  favicon.svg
```

---

## Instructor checklist (before going on stage)

- [ ] `pnpm install` runs clean
- [ ] `pnpm dev` boots on `:3000`, landing renders, broken pill is visible
- [ ] `/login` form returns 404 on submit
- [ ] Antigravity is connected with Gemini 3 Pro available
- [ ] Chrome DevTools MCP is reachable (test ping: ask the agent to read
      `localhost:3000` and report the page title)
- [ ] Supabase MCP is connected and pointed at a throwaway project
- [ ] You have at least 2 reference screenshots ready for Pillar 1 (in case
      audience asks for a re-run)
- [ ] Backup branch `talk-checkpoint` exists for fast rollback between
      demos
