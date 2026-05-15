export type ProjectCategory =
  | "ai"
  | "web"
  | "hardware"
  | "game"
  | "tooling"
  | "social";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  team: string;
  members: number;
  emoji: string;
  votes: number;
  trending: boolean;
  techStack: string[];
}
