-- DDL schema and seeding script for projects table

-- Create category enum
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_category') THEN
        CREATE TYPE project_category AS ENUM ('ai', 'web', 'hardware', 'game', 'tooling', 'social');
    END IF;
END$$;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  category project_category NOT NULL,
  team TEXT NOT NULL,
  members INTEGER NOT NULL,
  emoji TEXT NOT NULL,
  votes INTEGER NOT NULL DEFAULT 0,
  is_trending BOOLEAN NOT NULL DEFAULT false,
  tech_stack TEXT[] NOT NULL,
  cover_image TEXT NOT NULL
);

-- Seed projects data
INSERT INTO projects (id, name, tagline, category, team, members, emoji, votes, is_trending, tech_stack, cover_image) VALUES
('prj_01', 'Echo', 'Voice memos that turn into searchable docs in seconds.', 'ai', 'Team Nimbus', 3, '🎙️', 248, true, ARRAY['Next.js', 'Whisper', 'Supabase'], 'https://picsum.photos/seed/echo/800/450'),
('prj_02', 'Patchwork', 'Drag-and-drop quilt designer powered by generative motifs.', 'ai', 'Loom Lords', 4, '🧵', 187, true, ARRAY['React', 'Stable Diffusion', 'Three.js'], 'https://picsum.photos/seed/patchwork/800/450'),
('prj_03', 'Pebble', 'Tiny IoT button that posts your mood to a shared dashboard.', 'hardware', 'Solder Mafia', 2, '🪨', 156, false, ARRAY['ESP32', 'MQTT', 'SvelteKit'], 'https://picsum.photos/seed/pebble/800/450'),
('prj_04', 'Rookie', 'Game where you learn keyboard shortcuts by surviving waves.', 'game', 'Pixel Punks', 5, '🎮', 142, false, ARRAY['PixiJS', 'Tone.js'], 'https://picsum.photos/seed/rookie/800/450'),
('prj_05', 'Bramble', 'Mesh-style note app — every note is a node in your second brain.', 'tooling', 'Foresters', 3, '🌿', 119, false, ARRAY['Astro', 'D3', 'IndexedDB'], 'https://picsum.photos/seed/bramble/800/450'),
('prj_06', 'Civic Pulse', 'City budget explained as a 2-minute animated story per district.', 'social', 'Open Block', 4, '🏛️', 98, false, ARRAY['Remotion', 'Postgres'], 'https://picsum.photos/seed/civic/800/450'),
('prj_07', 'Brewlog', 'Coffee tasting journal with shared cup roster for cafés.', 'web', 'Slow Drip', 2, '☕', 84, false, ARRAY['Hono', 'SQLite', 'HTMX'], 'https://picsum.photos/seed/brewlog/800/450'),
('prj_08', 'Tidepool', 'Tide-aware planner for beach photographers and surfers.', 'web', 'Shorebreak', 3, '🌊', 71, false, ARRAY['SvelteKit', 'PostGIS'], 'https://picsum.photos/seed/tidepool/800/450')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  tagline = EXCLUDED.tagline,
  category = EXCLUDED.category,
  team = EXCLUDED.team,
  members = EXCLUDED.members,
  emoji = EXCLUDED.emoji,
  votes = EXCLUDED.votes,
  is_trending = EXCLUDED.is_trending,
  tech_stack = EXCLUDED.tech_stack,
  cover_image = EXCLUDED.cover_image;
