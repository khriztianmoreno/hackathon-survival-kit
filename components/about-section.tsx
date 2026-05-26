// ---------------------------------------------------------------------------
// Pillar 3b demo target.
//
// The body copy below is a placeholder. During the workshop the instructor
// opens the Agent Manager, spawns a second agent and asks it to rewrite this
// section as polished marketing copy — in parallel with the main agent doing
// other work. Both agents commit to the same repo.
// ---------------------------------------------------------------------------

import { Megaphone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <div className="mb-2 flex items-center gap-2 text-signal-cyan">
              <Megaphone className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                about demoday
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why a wall instead of a leaderboard?
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-ink-300">
            {/* TODO: replace with polished marketing copy (delegate this to
                a secondary agent via the Agent Manager during the workshop).
                Keep the three-paragraph rhythm but rewrite the content. */}
            <p>
              We started DemoDay because we got tired of looking at the same
              five winning projects on every hackathon recap. Most of the magic
              during a weekend happens in the trenches, with the teams that
              finish 7th, 12th, or 20th. They didn't capture the judges'
              fleeting attention, but they built real code, tackled complex
              systems, and walked away with something functional. We believe those
              efforts deserve a lasting spotlight.
            </p>
            <p>
              DemoDay gathers every single submission and gives it a clean,
              beautiful page to shine. We show a clear tagline, a fun emoji,
              and the real team of engineers and designers who stayed up late
              writing code. Users can inspect your repository, view your
              architecture, and cast their upvote based on execution, not hype.
              It is a level playing field designed by builders, for builders,
              with absolutely zero corporate fluff.
            </p>
            <p>
              Use DemoDay to find inspiration, showcase your portfolio, or
              launch your next side project. We don't take a cut, we don't lock
              you into any proprietary ecosystems, and we certainly don't spam
              your inbox. We just care about the craft of shipping clean software
              under pressure. If you survived the weekend, you deserve a place on
              this wall to show off what you did.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
