import { Users, Code2, Megaphone, Trophy, ArrowRight } from "lucide-react";

export function PitchSection() {
  return (
    <section id="pitch" className="relative py-24 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="timeline-eyebrow">
            <span className="timeline-eyebrow-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-ink-300">
              Process / 04 phases
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight uppercase leading-none mt-4">
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(218,220,232,0.3)]">HOW </span>
            <span className="bg-gradient-to-r from-signal-cyan via-signal-violet to-signal-orange bg-clip-text text-transparent">IT WORKS</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-ink-400 max-w-md font-sans leading-relaxed">
            Four phases from raw idea to a launched product.
            <br />
            Follow the sequence.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-2">
          {/* Central Rail */}
          <div className="timeline-rail" />

          {/* Timeline Rows */}
          <div className="space-y-4">
            {/* Phase 01 */}
            <div 
              className="timeline-step"
              style={{ 
                animationDelay: "0.2s",
                "--c": "#3dd7d0",
                "--c-mid": "rgba(61, 215, 208, 0.4)",
                "--c-soft": "rgba(61, 215, 208, 0.16)"
              } as React.CSSProperties}
            >
              {/* Node */}
              <div className="timeline-node">
                <div className="timeline-node-ring" />
                <div className="timeline-node-num">01</div>
              </div>
              
              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-ghost">1</div>
                <div className="timeline-tag">
                  <span className="ico">
                    <Users className="h-4.5 w-4.5" />
                  </span>
                  Form a team
                </div>
                <h3>Build your squad</h3>
                <p>
                  Connect with developers, designers, and innovators to form a diverse, ready-to-ship team.
                </p>
                <div className="timeline-meta">
                  <span>~ 2 days</span>
                  <span className="timeline-meta-bar" />
                  <span className="lowercase">collab</span>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div 
              className="timeline-step"
              style={{ 
                animationDelay: "0.45s",
                "--c": "#9d6bff",
                "--c-mid": "rgba(157, 107, 255, 0.4)",
                "--c-soft": "rgba(157, 107, 255, 0.16)"
              } as React.CSSProperties}
            >
              {/* Node */}
              <div className="timeline-node">
                <div className="timeline-node-ring" />
                <div className="timeline-node-num">02</div>
              </div>
              
              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-ghost">2</div>
                <div className="timeline-tag">
                  <span className="ico">
                    <Code2 className="h-4.5 w-4.5" />
                  </span>
                  Hack & code
                </div>
                <h3>Build your vision</h3>
                <p>
                  Develop your project in a 48-hour sprint. Turn the idea into a working prototype.
                </p>
                <div className="timeline-meta">
                  <span>48 hrs</span>
                  <span className="timeline-meta-bar" />
                  <span className="lowercase">sprint</span>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div 
              className="timeline-step"
              style={{ 
                animationDelay: "0.7s",
                "--c": "#ff5fa2",
                "--c-mid": "rgba(255, 95, 162, 0.4)",
                "--c-soft": "rgba(255, 95, 162, 0.16)"
              } as React.CSSProperties}
            >
              {/* Node */}
              <div className="timeline-node">
                <div className="timeline-node-ring" />
                <div className="timeline-node-num">03</div>
              </div>
              
              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-ghost">3</div>
                <div className="timeline-tag">
                  <span className="ico">
                    <Megaphone className="h-4.5 w-4.5" />
                  </span>
                  Pitch & demo
                </div>
                <h3>Present your solution</h3>
                <p>
                  Deliver a sharp pitch and live demo to a panel of industry-expert judges.
                </p>
                <div className="timeline-meta">
                  <span>10 min</span>
                  <span className="timeline-meta-bar" />
                  <span className="lowercase">stage</span>
                </div>
              </div>
            </div>

            {/* Phase 04 */}
            <div 
              className="timeline-step"
              style={{ 
                animationDelay: "0.95s",
                "--c": "#ffb44d",
                "--c-mid": "rgba(255, 180, 77, 0.4)",
                "--c-soft": "rgba(255, 180, 77, 0.16)"
              } as React.CSSProperties}
            >
              {/* Node */}
              <div className="timeline-node">
                <div className="timeline-node-ring" />
                <div className="timeline-node-num">04</div>
              </div>
              
              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-ghost">4</div>
                <div className="timeline-tag">
                  <span className="ico">
                    <Trophy className="h-4.5 w-4.5" />
                  </span>
                  Win & scale
                </div>
                <h3>Win big & scale up</h3>
                <p>
                  Claim prizes and recognition, then launch your project with hands-on mentorship.
                </p>
                <div className="timeline-meta">
                  <span>ongoing</span>
                  <span className="timeline-meta-bar" />
                  <span className="lowercase">launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA Callout */}
        <div className="mt-16 flex gap-6 items-center pl-2 timeline-foot">
          {/* Spacer to align CTA button with the cards */}
          <div className="w-[78px] flex-shrink-0 max-sm:hidden" />
          
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#register"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-cyan to-signal-violet px-6 text-sm font-semibold text-ink-950 shadow-[0_8px_32px_-12px_rgba(34,211,238,0.4)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start your journey
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-ink-400">
              Applications open now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


