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
              [PLACEHOLDER PARAGRAPH] We started DemoDay because we got tired
              of looking at the same five winning projects on every hackathon
              recap. Most of the magic during a weekend happens in the teams
              that finish 7th, 12th, 20th — they shipped, they learned, they
              just didn't fit the leaderboard.
            </p>
            <p>
              [PLACEHOLDER PARAGRAPH] DemoDay collects every submission and
              gives it a fair page: a tagline, an emoji, the team behind it
              and a way to upvote without ranking it to death.
            </p>
            <p>
              [PLACEHOLDER PARAGRAPH] Use it as inspiration, as a portfolio
              wall, or as the first marketing surface for your weekend
              project. We don't take a cut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
