import Reveal from "@/components/motion/Reveal";

export default function AboutEthan() {
  return (
    <section className="bg-[var(--off-white)] py-32 relative">
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Photo placeholder */}
          <Reveal>
            <div className="sticky top-32">
              <div
                data-cursor="pointer"
                className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--paper)] to-[var(--mist)]/30 border-2 border-[var(--lime-acid)] relative overflow-hidden flex items-end p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,255,61,0.15),transparent_60%)]" />
                <div className="relative">
                  <p className="font-display font-bold text-display-sm text-[var(--ink)] leading-none">
                    Ethan
                    <br />
                    Peterson
                  </p>
                  <p className="font-mono text-caption text-[var(--smoke)] uppercase tracking-widest mt-2">
                    Founder
                  </p>
                </div>
              </div>
              <p className="font-mono text-caption text-[var(--smoke)] uppercase tracking-widest mt-4">
                Saratoga Springs, UT
              </p>
            </div>
          </Reveal>

          {/* Story */}
          <div>
            <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
              WHO RUNS THIS
            </p>
            <Reveal>
              <h2 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--ink)] mb-10">
                I built this because I got tired of watching good businesses lose to worse ones.
              </h2>
            </Reveal>

            <Reveal stagger className="flex flex-col gap-6 text-body-lg text-[var(--smoke)] leading-relaxed max-w-2xl">
              <p>
                Fresh Lime Media was born from a simple frustration: watching good
                businesses get outranked by worse ones because they didn&rsquo;t know
                how to speak Google&rsquo;s language — let alone ChatGPT&rsquo;s.
                I&rsquo;ve built SEO strategies for local businesses, launched a
                pickleball court surfacing franchise, and run digital marketing for
                clients across industries since 2016. I know what works because
                I&rsquo;ve had to make it work with real budgets and real timelines.
              </p>
              <p>
                At Fresh Lime, we don&rsquo;t sell you on impressions or vanity
                metrics. We track citations, rankings, calls, and revenue. If it
                doesn&rsquo;t move those needles, we change the strategy.
              </p>
            </Reveal>

            <p className="mt-12 font-display italic text-body-lg text-[var(--ink)]">
              — Ethan Peterson, Fresh Lime Media
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
