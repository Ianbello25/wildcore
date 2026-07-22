export default function HeroScroll() {
  return (
    <a
      href="#shop"
      className="hero-scroll"
      aria-label="Desplazarse hacia la colección"
    >
      <span>SCROLL TO EXPLORE</span>

      <span
        className="hero-scroll-arrow"
        aria-hidden="true"
      >
        ↓
      </span>
    </a>
  );
}