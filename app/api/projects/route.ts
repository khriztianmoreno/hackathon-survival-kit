import { NextResponse } from "next/server";
import { projects } from "@/lib/mocks/projects";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ projects });
}
