export default function OurStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#E31B23]/10 blur-[140px]" />

        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#E31B23]/30 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(227,27,35,0.07),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#E31B23]" />

          <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#E31B23]">
            WILDCORE — OUR STORY
          </p>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
          <div>
            <h2 className="text-[clamp(3.3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em] text-white">
              THE WOLF
              <span className="mt-2 block text-[#E31B23]">
                WAS ALWAYS
              </span>
              <span className="mt-2 block">
                WITHIN.
              </span>
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-lg text-sm leading-8 text-zinc-400">
              WILDCORE nace de una mentalidad: superar la versión de ayer.
              Una identidad construida entre entrenamiento, calle y
              disciplina.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-8 text-zinc-500">
              Diseñada para quienes entienden que la fuerza no siempre se
              muestra. Se construye.
            </p>

            <div className="mt-10 h-px w-24 bg-[#E31B23]" />

            <p className="mt-8 text-xl font-bold uppercase leading-tight tracking-[0.12em] text-white md:text-2xl">
              BUILT IN MEXICO.
              <br />
              <span className="text-zinc-500">
                WORN WITHOUT LIMITS.
              </span>
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 grid border-y border-white/10 md:grid-cols-3">
          <div className="group py-9 md:border-r md:border-white/10 md:px-8 md:first:pl-0">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#E31B23]">
              01
            </p>

            <h3 className="mt-4 text-lg font-bold uppercase tracking-[0.15em] text-white">
              Discipline
            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-zinc-600">
              El hábito nos define.
            </p>
          </div>

          <div className="group border-t border-white/10 py-9 md:border-r md:border-t-0 md:px-8">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#E31B23]">
              02
            </p>

            <h3 className="mt-4 text-lg font-bold uppercase tracking-[0.15em] text-white">
              Identity
            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-zinc-600">
              Más que ropa. Es mentalidad.
            </p>
          </div>

          <div className="group border-t border-white/10 py-9 md:border-t-0 md:px-8 md:last:pr-0">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#E31B23]">
              03
            </p>

            <h3 className="mt-4 text-lg font-bold uppercase tracking-[0.15em] text-white">
              Inner Strength
            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-zinc-600">
              La verdadera fuerza viene dentro.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 overflow-hidden">
          <p className="whitespace-nowrap text-center text-[clamp(2rem,6vw,6rem)] font-black uppercase leading-none tracking-[-0.05em] text-white/[0.035]">
            UNLEASH WHAT&apos;S WITHIN.
          </p>
        </div>
      </div>
    </section>
  );
}