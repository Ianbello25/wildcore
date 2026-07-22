import HeroAthlete from "./HeroAthlete";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScroll from "./HeroScroll";
import HeroValues from "./HeroValues";
import HeroWolf from "./HeroWolf";

export default function Hero() {
  return (
    <section className="wildcore-hero">
      <HeroBackground />
      <HeroWolf />

      <div className="hero-layout">
        <HeroContent />
        <HeroAthlete />
      </div>

      <HeroValues />
      <HeroScroll />
    </section>
  );
}
