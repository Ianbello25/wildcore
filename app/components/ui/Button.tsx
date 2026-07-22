import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "hero-primary-button"
      : "hero-secondary-link";

  const classes = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
