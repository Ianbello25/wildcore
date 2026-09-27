"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector(".wildcore-hero");

    if (!hero) return;

    const wolf = hero.querySelector(".hero-wolf") as HTMLElement | null;
    const logo = hero.querySelector(".hero-logo") as HTMLElement | null;
    const athlete = hero.querySelector(".hero-athlete") as HTMLElement | null;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      if (wolf) {
        wolf.style.transform =
          `translate(${x * 8}px, ${y * 8}px)`;
      }

      if (logo) {
        logo.style.transform =
          `translate(${x * 14}px, ${y * 14}px)`;
      }

      if (athlete) {
        athlete.style.transform =
          `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}
