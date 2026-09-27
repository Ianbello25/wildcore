export default function HeroParticles() {
  return (
    <div className="hero-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="hero-particle"
          style={
            {
              "--x": `${Math.random() * 100}%`,
              "--delay": `${Math.random() * 8}s`,
              "--duration": `${8 + Math.random() * 8}s`,
              "--size": `${2 + Math.random() * 4}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
