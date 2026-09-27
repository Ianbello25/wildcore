import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-hidden="true">
      <div className="hero-logo-glow" />

      <Image
        src="/images/hero/wildcore-logo.png"
        alt=""
        width={1200}
        height={650}
        priority
        className="hero-logo-image"
      />
    </div>
  );
}