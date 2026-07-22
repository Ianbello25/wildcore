import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";

const products = [
  {
    name: "WILDCORE OVERSIZED TEE",
    category: "ESSENTIALS",
    price: "$899 MXN",
  },
  {
    name: "CORE TRAINING SHORT",
    category: "TRAINING",
    price: "$799 MXN",
  },
  {
    name: "INNER STRENGTH HOODIE",
    category: "LIMITED DROP",
    price: "$1,299 MXN",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
    <Navbar />
<Hero />


      {/* MANIFESTO */}
      <section className="border-y border-white/10 bg-[#080808] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">
            THE WILDCORE MINDSET
          </p>

          <h2 className="manifesto-title mt-8 max-w-5xl">
            WE DON'T FOLLOW
            <span>TRENDS.</span>
            <br />
            WE BUILD
            <span>IDENTITY.</span>
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

      {/* SHOP */}
      <section id="shop" className="bg-black px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">01 — THE COLLECTION</p>

              <h2 className="section-title mt-4">
                NEW <span>DROP</span>
              </h2>
            </div>

            <a
              href="#"
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-[#E31B23]"
            >
              View all products →
            </a>
          </div>

          {/* PRODUCT GRID */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="product-card group"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="product-image">
                  <span className="absolute left-5 top-5 z-10 text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                    0{index + 1}
                  </span>

                  <div className="product-placeholder">
                    WILDCORE
                  </div>

                  <button className="product-button">
                    QUICK ADD +
                  </button>
                </div>

                <div className="mt-5 flex justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-sm font-medium tracking-wide">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-400">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
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
            <p className="section-label">
              02 — WILDCORE IDENTITY
            </p>

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

            <a href="#" className="red-button mt-10">
              OUR STORY
              <span>→</span>
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

      {/* PHILOSOPHY */}
      <section className="px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">
            03 — THE PHILOSOPHY
          </p>

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
      <section className="border-t border-white/10 bg-[#080808] px-6 py-24 text-center">
        <p className="section-label">
          JOIN THE CORE
        </p>

        <h2 className="section-title mt-6">
          STAY <span>WILD.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-zinc-500">
          Sé parte de la comunidad WILDCORE y descubre nuevos drops,
          colecciones limitadas y lanzamientos exclusivos.
        </p>

        <div className="mx-auto mt-10 flex max-w-md border-b border-white/20">
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="newsletter-input"
          />

          <button className="text-xs font-medium uppercase tracking-[0.2em] text-[#E31B23] transition-colors hover:text-white">
            JOIN →
          </button>
        </div>
      </section>

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

          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-zinc-500">
            <a href="#" className="hover:text-[#E31B23]">
              Instagram
            </a>

            <a href="#" className="hover:text-[#E31B23]">
              TikTok
            </a>

            <a href="#" className="hover:text-[#E31B23]">
              Contact
            </a>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            © 2026 WILDCORE
          </p>
        </div>
      </footer>
    </main>
  );
}