import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data: supabaseRows, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      throw error;
    }

    const payload = (supabaseRows as any[]).map((row) => ({
      id: row.id,
      name: row.name,
      tagline: row.tagline,
      category: row.category,
      team: row.team,
      members: row.members,
      emoji: row.emoji,
      votes: row.votes,
      trending: row.is_trending,
      techStack: row.tech_stack.slice(0, 3),
      coverImage: row.cover_image,
    }));

    return NextResponse.json({ projects: payload });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
        hint: "Supabase returns snake_case columns (tech_stack, cover_image, is_trending) but the route maps to camelCase keys that do not exist on the row.",
      },
      { status: 500 }
    );
  }
}
