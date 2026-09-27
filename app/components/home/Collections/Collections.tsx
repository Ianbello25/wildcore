"use client";

import Image from "next/image";
import { useState } from "react";

import { collections } from "./data";
import ProductCard from "./ProductCard";

export default function Collections() {
  const [activeCategories, setActiveCategories] = useState<
    Record<string, string>
  >({});

  const getActiveCategory = (
    collectionId: string,
    firstCategory: string
  ) => {
    return activeCategories[collectionId] ?? firstCategory;
  };

  const changeCategory = (
    collectionId: string,
    categoryTitle: string
  ) => {
    setActiveCategories((prev) => ({
      ...prev,
      [collectionId]: categoryTitle,
    }));
  };
  
return (
  <section
    id="collections"
    className="border-y border-white/10 bg-black py-32"
  >
    <div
      id="shop"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10"
    >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-32 max-w-3xl text-center">
          <p className="section-label">
            02 — COLLECTIONS
          </p>

          <h2 className="section-title mt-8">
            DISCOVER THE <span>DROP.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-zinc-500">
            Performance, streetwear and graphic culture.
            Explore the collections that define WILDCORE.
          </p>
        </div>

        {/* =================================================
            COLLECTIONS
        ================================================= */}

        {collections.map((collection, collectionIndex) => {
          const firstCategory =
            collection.categories[0]?.title ?? "";

          const activeCategoryTitle =
            getActiveCategory(
              collection.id,
              firstCategory
            );

          const activeCategory =
            collection.categories.find(
              (category) =>
                category.title === activeCategoryTitle
            ) ?? collection.categories[0];

          return (
            <div
              key={collection.id}
              className="mb-44 last:mb-0"
            >

              {/* =============================================
                  COLLECTION NUMBER
              ============================================= */}

              <div className="mb-6 flex items-center gap-4">
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.45em]"
                  style={{
                    color: collection.accent,
                  }}
                >
                  {String(collectionIndex + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div
                  className="h-px w-12"
                  style={{
                    backgroundColor:
                      collection.accent,
                  }}
                />

                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
                  WILDCORE COLLECTION
                </span>
              </div>

              {/* =============================================
                  COLLECTION HERO
              ============================================= */}

              <div className="mb-16 overflow-hidden rounded-[36px] border border-white/10 bg-[#080808]">

                <div className="grid lg:grid-cols-2">

                  {/* COPY */}

                  <div className="flex min-h-[500px] flex-col justify-center p-10 lg:p-16">

                    <p
                      className="mb-5 text-[10px] uppercase tracking-[0.45em]"
                      style={{
                        color: collection.accent,
                      }}
                    >
                      COLLECTION
                    </p>

                    <h2 className="max-w-xl text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
                      {collection.title}
                    </h2>

                    <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {collection.subtitle}
                    </p>

                    <div
                      className="mt-8 h-[2px] w-20"
                      style={{
                        backgroundColor:
                          collection.accent,
                      }}
                    />

                    <p className="mt-8 max-w-md text-sm leading-8 text-zinc-400">
                      {collection.description}
                    </p>

                    <div className="mt-12 flex items-center gap-4">
                      <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                        {collection.categories.reduce(
                          (total, category) =>
                            total +
                            category.items.length,
                          0
                        )}{" "}
                        PIECES
                      </span>

                      <span className="h-px w-8 bg-white/10" />

                      <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                        LIMITED SERIES
                      </span>
                    </div>

                  </div>

                  {/* HERO IMAGE */}

                  <div className="relative min-h-[500px] overflow-hidden bg-[#050505]">

                    <Image
                      src={collection.heroImage}
                      alt={collection.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-10 transition-transform duration-1000 hover:scale-[1.04] lg:p-14"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="pointer-events-none absolute bottom-7 right-8">
                      <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">
                        INNER STRENGTH
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* =============================================
                  CATEGORY NAVIGATION
              ============================================= */}

              {collection.categories.length > 1 && (
                <div className="mb-14 overflow-x-auto border-y border-white/10">

                  <div className="flex min-w-max">

                    {collection.categories.map(
                      (category) => {
                        const isActive =
                          category.title ===
                          activeCategory.title;

                        return (
                          <button
                            key={category.title}
                            type="button"
                            onClick={() =>
                              changeCategory(
                                collection.id,
                                category.title
                              )
                            }
                            className="
                              relative
                              px-7
                              py-6
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.3em]
                              transition-colors
                              duration-300
                            "
                            style={{
                              color: isActive
                                ? "#ffffff"
                                : "#52525b",
                            }}
                          >
                            {category.title}

                            <span className="ml-3 text-[8px] text-zinc-700">
                              {String(
                                category.items.length
                              ).padStart(2, "0")}
                            </span>

                            {isActive && (
                              <span
                                className="absolute bottom-0 left-0 h-[2px] w-full"
                                style={{
                                  backgroundColor:
                                    collection.accent,
                                }}
                              />
                            )}
                          </button>
                        );
                      }
                    )}

                  </div>
                </div>
              )}

              {/* =============================================
                  ACTIVE CATEGORY
              ============================================= */}

              {activeCategory && (
                <div>

                  <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                        CURRENT CATEGORY
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.2em] text-white md:text-3xl">
                        {activeCategory.title}
                      </h3>
                    </div>

                    <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                      {activeCategory.items.length} PRODUCTS
                    </p>

                  </div>

                  {/* PRODUCTS */}

                  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {activeCategory.items.map(
                      (product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                        />
                      )
                    )}
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>
    </section>
  );
}
