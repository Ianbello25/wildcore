"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setJoined(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-24 text-center">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E31B23]/[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="section-label">JOIN THE CORE</p>

        <h2 className="section-title mt-6">
          STAY <span>WILD.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm uppercase leading-7 tracking-[0.12em] text-zinc-500">
          Early access. Limited drops. No noise.
        </p>

        {!joined ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-md border-b border-white/20 transition-colors duration-300 focus-within:border-[#E31B23]"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>

            <input
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="YOUR EMAIL"
              className="newsletter-input"
              autoComplete="email"
              required
            />

            <button
              type="submit"
              className="shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-[#E31B23] transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              JOIN →
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-12 max-w-md border-y border-[#E31B23]/30 py-8">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#E31B23]">
              WELCOME TO WILDCORE
            </p>

            <p className="mt-4 text-xl font-bold uppercase tracking-[0.12em] text-white">
              YOU&apos;RE IN THE CORE.
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              INNER STRENGTH. ALWAYS.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}