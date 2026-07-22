import Image from "next/image";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <div className="hero-copy">
      <p className="hero-eyebrow">
        MEXICAN FITNESS &amp; STREETWEAR
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
  );
}