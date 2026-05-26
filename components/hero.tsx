import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24">
      <div className="container-narrow relative">
        {/* Live status pill — BUG (Pillar 2a): text-white sits on a white pill
            so the label is invisible. Visible bug for the DevTools demo. */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-950 shadow-lg shadow-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-lime" />
          </span>
          12 teams shipping live · ends Sunday 23:59
        </div>

        <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          The weekend is short.
          <br />
          <span className="gradient-text">Your project shouldn't be.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
          DemoDay is the showcase wall for every team racing the clock this
          weekend. Browse what others are shipping, steal good ideas, and
          submit your own when you're ready to be judged.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/login" className="btn-primary">
            <Zap className="h-4 w-4" />
            Submit your project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#projects" className="btn-secondary">
            Browse 12 projects
          </Link>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <Stat label="Teams competing" value="12" accent="text-signal-orange" />
          <Stat label="Hours remaining" value="36" accent="text-signal-cyan" />
          <Stat label="Prize pool" value="$8k" accent="text-signal-violet" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-signal-violet/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-signal-orange/20 blur-3xl animate-float-slow" />
    </section>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div>
      <p className={`text-3xl font-bold tabular-nums ${accent}`}>{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-ink-400">
        {label}
      </p>
    </div>
  );
}
