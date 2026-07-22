const values = [
  "DISCIPLINE",
  "FOCUS",
  "RESILIENCE",
  "LEGACY",
];

export default function HeroValues() {
  return (
    <div
      className="hero-values"
      aria-label="Valores de WILDCORE"
    >
      {values.map((value, index) => (
        <span className="hero-value-group" key={value}>
          <span>{value}</span>

          {index < values.length - 1 && (
            <i aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}