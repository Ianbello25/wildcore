import Image from "next/image";

export default function HeroWolf() {
  return (
    <div className="hero-wolf" aria-hidden="true">
      <div className="hero-wolf-glow" />

      <Image
        src="/images/hero/wolf.png"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 145vw, 64vw"
        className="hero-wolf-image"
      />

      <div className="hero-wolf-eyes">
        <span className="hero-wolf-eye hero-wolf-eye-left" />
        <span className="hero-wolf-eye hero-wolf-eye-right" />
      </div>
    </div>
  );
}