"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Product } from "./data";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false);

  const mainImage = product.images[0];
  const hoverImage =
    product.images.length > 1
      ? product.images[1]
      : product.images[0];

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#070707] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
        {/* IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#090909]">
          <Image
            src={hovered ? hoverImage : mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-6 transition-all duration-700 ease-out group-hover:scale-[1.035]"
          />

          {/* sombreado inferior */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          {/* etiqueta superior */}
          <div className="absolute left-5 top-5">
            <span className="border border-white/10 bg-black/40 px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-md">
              WILDCORE
            </span>
          </div>

          {/* indicador FRONT / BACK */}
          {product.images.length > 1 && (
            <div className="absolute right-5 top-5">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                {hovered ? "BACK" : "FRONT"}
              </span>
            </div>
          )}

          {/* información */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[8px] uppercase tracking-[0.4em] text-zinc-500">
              INNER STRENGTH
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white transition-colors duration-300 group-hover:text-[#E31B23]">
              {product.name}
            </h3>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                VIEW PRODUCT
              </span>

              <span className="translate-x-0 text-sm text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
