import HeroAthlete from "./HeroAthlete";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScroll from "./HeroScroll";
import HeroValues from "./HeroValues";
import HeroWolf from "./HeroWolf";
import HeroLogo from "./HeroLogo";
import HeroParallax from "./HeroParallax";
import HeroParticles from "./HeroParticles";

export default function Hero() {
  return (
   <section className="wildcore-hero">

  <HeroBackground />

  <HeroParallax />

<div className="hero-visual">

    <HeroWolf />

    <HeroParticles />

    <HeroLogo />

    <HeroAthlete />

</div>

      <div className="hero-layout">
        <HeroContent />
      </div>

      <HeroValues />
      <HeroScroll />
    </section>
  );
}