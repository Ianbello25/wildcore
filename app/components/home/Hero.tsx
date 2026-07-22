import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="wildcore-hero">
      {/* BACKGROUND */}
      <div className="hero-background" />
      <div className="hero-red-orb" />
      <div className="hero-smoke" />
      <div className="hero-texture" />
      <div className="hero-dark-overlay" />

      {/* WOLF PLACEHOLDER */}
      <div className="hero-wolf" aria-hidden="true">
        <div className="wolf-eye wolf-eye-left" />
        <div className="wolf-eye wolf-eye-right" />

        <p className="wolf-placeholder-text">
          THE WOLF WITHIN
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-layout">
        {/* LEFT COLUMN */}
        <div className="hero-copy">
          <p className="hero-eyebrow">
            MEXICAN FITNESS & STREETWEAR
          </p>

          <div className="hero-logo-wrapper">
            <Image
              src="/images/wildcore-logo.png"
              alt="WILDCORE — Inner Strength"
              width={1500}
              height={960}
              priority
              className="hero-main-logo"
            />
          </div>

          <p className="hero-slogan">
            FORGED BY DISCIPLINE
          </p>

          <p className="hero-description">
            Rendimiento, identidad y fuerza interior para quienes construyen
            su propia versión más fuerte.
          </p>

          <div className="hero-actions">
            <Button
              href="#shop"
              ariaLabel="Explorar nueva colección"
            >
              <span>EXPLORE NEW DROP</span>
              <span aria-hidden="true">→</span>
            </Button>

            <Button
              href="#about"
              variant="secondary"
              ariaLabel="Conocer la filosofía de WILDCORE"
            >
              DISCOVER THE MINDSET
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-athlete" aria-hidden="true">
          <div className="athlete-placeholder">
            <span>WILDCORE</span>
            <small>OFFICIAL ATHLETE</small>
          </div>
        </div>
      </div>

      {/* SIDE PHILOSOPHY */}
      <div className="hero-values">
        <span>DISCIPLINE</span>
        <i />
        <span>FOCUS</span>
        <i />
        <span>RESILIENCE</span>
        <i />
        <span>LEGACY</span>
      </div>

      {/* SCROLL INDICATOR */}
      <a href="#shop" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="hero-scroll-arrow" aria-hidden="true">
          ↓
        </div>
      </a>
    </section>
  );
}
