"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { collections } from "../home/Collections/data";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const products = useMemo(() => {
    return collections.flatMap((collection) =>
      collection.categories.flatMap((category) => category.items)
    );
  }, []);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return products
      .filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery)
      )
      .slice(0, 8);
  }, [query, products]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl">
      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500">
            WILDCORE SEARCH
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:border-[#E31B23] hover:text-[#E31B23]"
          >
            ×
          </button>
        </div>
      </div>

      <div className="mx-auto max-h-[calc(100vh-80px)] max-w-7xl overflow-y-auto px-6 pb-16 pt-14 lg:px-10">
        {/* SEARCH INPUT */}
        <div className="border-b border-white/20 pb-5">
          <label
            htmlFor="wildcore-search"
            className="mb-5 block text-[9px] uppercase tracking-[0.35em] text-zinc-600"
          >
            WHAT ARE YOU LOOKING FOR?
          </label>

          <div className="flex items-center gap-5">
            <span
              aria-hidden="true"
              className="text-xl text-[#E31B23]"
            >
              /
            </span>

            <input
              ref={inputRef}
              id="wildcore-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="SEARCH WILDCORE"
              autoComplete="off"
              className="w-full bg-transparent text-3xl font-bold uppercase tracking-tight text-white outline-none placeholder:text-zinc-800 md:text-5xl"
            />
          </div>
        </div>

        {/* INITIAL STATE */}
        {!query.trim() && (
          <div className="py-20">
            <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
              SEARCH THE COLLECTION
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
              FIND YOUR
              <br />
              <span className="text-[#E31B23]">
                NEXT PIECE.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
              Busca playeras, jerseys, joggers, hoodies y piezas de las
              colecciones WILDCORE.
            </p>
          </div>
        )}

        {/* RESULTS */}
        {query.trim() && results.length > 0 && (
          <div className="pt-10">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-500">
                RESULTS
              </p>

              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
                {results.length}{" "}
                {results.length === 1 ? "PRODUCT" : "PRODUCTS"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="group flex items-center gap-5 border border-white/10 bg-[#080808] p-4 transition-all duration-300 hover:border-white/25"
                >
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-[#0d0d0d]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="96px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-600">
                      WILDCORE
                    </p>

                    <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-[#E31B23]">
                      {product.name}
                    </h3>

                    {typeof product.price === "number" && (
                      <p className="mt-3 text-xs text-zinc-500">
                        ${product.price.toLocaleString("es-MX")} MXN
                      </p>
                    )}
                  </div>

                  <span className="pr-2 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E31B23]">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* NO RESULTS */}
        {query.trim() && results.length === 0 && (
          <div className="py-20">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#E31B23]">
              NO RESULTS
            </p>

            <h2 className="mt-5 text-3xl font-bold uppercase text-white md:text-5xl">
              NOTHING FOUND.
            </h2>

            <p className="mt-5 text-sm text-zinc-500">
              Intenta buscar otro producto o colección.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}