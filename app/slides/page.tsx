"use client";

import { AudienceView } from "@khriztianmoreno/speaker-kit";
import { ReactionSystem } from "@/components/reaction-system";
import { supabase } from "@/lib/supabase";
import { SLIDES } from "./_shared/slides";

export default function SlidesPage() {
  return (
    <AudienceView
      slides={SLIDES}
      channel="hackathon-survival-kit"
      supabase={supabase}
      overlay={() => <ReactionSystem />}
    />
  );
}
