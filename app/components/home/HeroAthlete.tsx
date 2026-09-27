import Image from "next/image";

export default function HeroAthlete() {
  return (
    <div className="hero-athlete" aria-hidden="true">
      <div className="hero-athlete-glow" />

      <div className="hero-athlete-frame">
        <Image
          src="/images/hero/wildcore-hero-main.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="hero-athlete-image"
        />

        <div className="hero-athlete-overlay" />
      </div>

      <div className="hero-athlete-shadow" />
    </div>
  );
}
