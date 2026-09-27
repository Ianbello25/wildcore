import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import NewDrop from "./components/home/NewDrop/NewDrop";
import Philosophy from "./components/home/Philosophy/Philosophy";
import Collections from "./components/home/Collections/Collections";
import OurStory from "./components/home/OurStory/OurStory";
import Newsletter from "./components/home/Newsletter/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <NewDrop />
      <Collections />
      <Philosophy />
      
      {/* MANIFESTO */}
      <section className="border-y border-white/10 bg-[#080808] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">THE WILDCORE MINDSET</p>

          <h2 className="manifesto-title mt-8 max-w-5xl">
            <span className="block">Don&apos;t follow trends.</span>

            <span className="block">TRENDS.</span>

            <span className="block">
              WE BUILD <span>IDENTITY.</span>
            </span>
          </h2>

          <div className="mt-16 flex justify-end">
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              WILDCORE nace de la mentalidad de quienes entrenan para
              superarse cada día. Una fusión entre el rendimiento deportivo y
              la estética urbana.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/10 bg-[#080808] px-6 py-32 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">02 — WILDCORE IDENTITY</p>

            <h2 className="section-title mt-6">
              BUILT
              <br />
              <span>IN MEXICO.</span>
            </h2>

            <p className="mt-10 max-w-lg text-sm leading-8 text-zinc-500">
              Diseñamos prendas con materiales premium, cortes modernos y
              diseños exclusivos que combinan comodidad, rendimiento y
              estética.
            </p>

            <a href="#story" className="red-button mt-10">
              OUR STORY
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="identity-box">
            <span className="identity-number">08</span>

            <p className="wildcore-font identity-text">
              YEARS OF
              <br />
              EXPERIENCE
            </p>

            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-600">
              Diseño · Corte · Estampado · Confección
            </p>
          </div>
        </div>
        
      </section>
<OurStory />

      {/* PHILOSOPHY */}
      <section className="px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">03 — THE PHILOSOPHY</p>

          <div className="mt-16 space-y-4">
            <div className="philosophy-line">
              <span>01</span>
              DISCIPLINE
            </div>

            <div className="philosophy-line">
              <span>02</span>
              CONSISTENCY
            </div>

            <div className="philosophy-line">
              <span>03</span>
              INNER STRENGTH
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
<Newsletter />
      

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Image
              src="/images/wdce-logo.png"
              alt="WDCE"
              width={120}
              height={60}
              className="footer-logo"
            />

            <p className="mt-3 text-[9px] uppercase tracking-[0.5em] text-zinc-600">
              INNER STRENGTH
            </p>
          </div>

          <nav
  aria-label="Redes sociales"
  className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-zinc-500"
>
  <a
    href="https://www.instagram.com/wildcoreoficial/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors hover:text-[#E31B23]"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@wildcoreoficiall"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors hover:text-[#E31B23]"
  >
    TikTok
  </a>
</nav>

          <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            © 2026 WILDCORE
          </p>
        </div>
      </footer>
    </main>
  );
}
