import { createClient } from "@supabase/supabase-js";
import type { SpeakerViewProps } from "@khriztianmoreno/speaker-kit";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error(
    "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY en .env.local"
  );
}

type SupabaseClientForSpeakerKit = NonNullable<SpeakerViewProps["supabase"]>;

export const supabase = createClient(
  url,
  key
) as unknown as SupabaseClientForSpeakerKit;
