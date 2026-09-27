"use client";

import { useState } from "react";

import { Product } from "../home/Collections/data";

import SizeGuideModal from "./SizeGuideModal";

import { useCart } from "../cart/CartContext";

interface ProductInfoProps {
  product: Product;
}

type AccordionKey =
  | "details"
  | "shipping"
  | "care"
  | null;

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const sizes =
    product.sizes &&
    product.sizes.length > 0
      ? product.sizes
      : ["S", "M", "L"];

  const [selectedSize, setSelectedSize] =
    useState<string | null>(null);

  const [
    openAccordion,
    setOpenAccordion,
  ] = useState<AccordionKey>(null);

  const [
    sizeGuideOpen,
    setSizeGuideOpen,
  ] = useState(false);

  const [added, setAdded] =
    useState(false);

  const [isAdding, setIsAdding] =
    useState(false);

  const [addError, setAddError] =
    useState<string | null>(null);

  const { addItem } = useCart();

  const toggleAccordion = (
    section: AccordionKey
  ) => {
    setOpenAccordion((current) =>
      current === section
        ? null
        : section
    );
  };

  // ===============================================
  // ADD TO CART
  // ===============================================

  const handleAddToBag = async () => {
    if (!selectedSize || isAdding) return;

    setIsAdding(true);
    setAddError(null);

    try {
      // ===========================================
      // PRODUCT CONNECTED TO SHOPIFY
      // ===========================================

      if (
        product.shopifyEnabled === true &&
        product.shopifyHandle
      ) {
        const response = await fetch(
          "/api/shopify-variant",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              handle:
                product.shopifyHandle,

              color:
                product.shopifyColor,

              size:
                selectedSize,
            }),
          }
        );

        const data = await response.json();

        if (
          !response.ok ||
          !data.success ||
          !data.variant
        ) {
          throw new Error(
            data.message ??
              "No se pudo encontrar esta variante en Shopify."
          );
        }

        addItem({
          id: product.id,

          name: product.name,

          image:
            product.images[0],

          size: selectedSize,

          price: product.price,

          shopifyVariantId:
            data.variant.id,
        });
      } else {
        // =========================================
        // PRODUCT NOT CONNECTED TO SHOPIFY YET
        // =========================================

        addItem({
          id: product.id,

          name: product.name,

          image:
            product.images[0],

          size: selectedSize,

          price: product.price,
        });
      }

      setAdded(true);

      window.setTimeout(() => {
        setAdded(false);
      }, 1600);
    } catch (error) {
      console.error(
        "Could not add product to bag:",
        error
      );

      setAddError(
        error instanceof Error
          ? error.message
          : "No se pudo agregar el producto."
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <aside className="lg:sticky lg:top-28">

        {/* =========================================
            BRAND
        ========================================= */}

        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#E31B23]" />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#E31B23]
            "
          >
            WILDCORE
          </p>
        </div>

        {/* =========================================
            NAME
        ========================================= */}

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            uppercase
            leading-[0.9]
            tracking-tight
            text-white
            md:text-5xl
            xl:text-6xl
          "
        >
          {product.name}
        </h1>

        <p
          className="
            mt-4
            text-[8px]
            uppercase
            tracking-[0.4em]
            text-zinc-700
          "
        >
          INNER STRENGTH — MEXICO CITY
        </p>

        <div className="my-8 h-px bg-white/10" />

        {/* =========================================
            PRICE
        ========================================= */}

        {product.price !== undefined ? (
          <p className="text-xl font-medium text-white">
            $
            {product.price.toLocaleString(
              "es-MX"
            )}{" "}
            MXN
          </p>
        ) : (
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-zinc-500
            "
          >
            PRICE COMING SOON
          </p>
        )}

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <p className="mt-6 text-sm leading-7 text-zinc-400">
          {product.description ??
            "Limited WILDCORE piece built around oversized streetwear, graphic identity and the mindset of inner strength."}
        </p>

        {/* =========================================
            SIZES
        ========================================= */}

        <div className="mt-10">
          <div className="flex items-center justify-between gap-5">

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white
              "
            >
              SELECT SIZE
            </p>

            <button
              type="button"
              onClick={() =>
                setSizeGuideOpen(true)
              }
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-zinc-500
                transition-colors
                duration-300
                hover:text-white
              "
            >
              SIZE GUIDE →
            </button>
          </div>

          <div
            translate="no"
            className={`
              mt-5
              grid
              gap-3

              ${
                sizes.length === 4
                  ? "grid-cols-4"
                  : "grid-cols-3"
              }
            `}
          >
            {sizes.map((size) => {
              const active =
                selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  translate="no"
                  onClick={() => {
                    setSelectedSize(size);
                    setAddError(null);
                  }}
                  className={`
                    h-14
                    border

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    transition-all
                    duration-300

                    ${
                      active
                        ? "border-[#E31B23] bg-[#E31B23] text-white"
                        : "border-white/10 bg-[#080808] text-zinc-400 hover:border-white/40 hover:text-white"
                    }
                  `}
                >
                  <span translate="no">
                    {size}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            ADD TO BAG
        ========================================= */}

        <button
          type="button"
          disabled={
            !selectedSize ||
            isAdding
          }
          onClick={handleAddToBag}
          className="
            mt-7

            flex
            h-16
            w-full
            items-center
            justify-between

            border
            px-6

            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]

            transition-all
            duration-300

            enabled:border-white
            enabled:bg-white
            enabled:text-black

            enabled:hover:border-[#E31B23]
            enabled:hover:bg-[#E31B23]
            enabled:hover:text-white

            disabled:cursor-not-allowed
            disabled:border-white/5
            disabled:bg-zinc-900
            disabled:text-zinc-600
          "
        >
          <span translate="no">
            {!selectedSize
              ? "SELECT A SIZE"
              : isAdding
                ? "ADDING..."
                : added
                  ? "ADDED TO BAG"
                  : `ADD SIZE ${selectedSize} TO BAG`}
          </span>

          <span>
            {isAdding
              ? "..."
              : added
                ? "✓"
                : "→"}
          </span>
        </button>

        {/* =========================================
            ADD ERROR
        ========================================= */}

        {addError && (
          <p className="mt-3 text-xs leading-5 text-[#E31B23]">
            {addError}
          </p>
        )}

        {/* =========================================
            ACCORDIONS
        ========================================= */}

        <div className="mt-10 border-t border-white/10">

          <AccordionItem
            label="PRODUCT DETAILS"
            open={
              openAccordion ===
              "details"
            }
            onClick={() =>
              toggleAccordion(
                "details"
              )
            }
          >
            {product.description ??
              "Limited WILDCORE garment developed around oversized proportions, graphic identity and everyday performance."}
          </AccordionItem>

          <AccordionItem
            label="SHIPPING & RETURNS"
            open={
              openAccordion ===
              "shipping"
            }
            onClick={() =>
              toggleAccordion(
                "shipping"
              )
            }
          >
            Shipping and return
            information will be
            displayed here once
            checkout and fulfillment
            are connected.
          </AccordionItem>

          <AccordionItem
            label="CARE INSTRUCTIONS"
            open={
              openAccordion ===
              "care"
            }
            onClick={() =>
              toggleAccordion(
                "care"
              )
            }
          >
            Wash cold and inside out
            with similar colors. Avoid
            bleach and do not iron
            directly over printed
            graphics.
          </AccordionItem>

        </div>

        <p
          className="
            mt-8
            text-[8px]
            uppercase
            leading-5
            tracking-[0.3em]
            text-zinc-700
          "
        >
          DESIGNED IN MEXICO · WILDCORE © 2026
        </p>

      </aside>

      {/* =========================================
          SIZE GUIDE
      ========================================= */}

      <SizeGuideModal
        open={sizeGuideOpen}
        onClose={() =>
          setSizeGuideOpen(false)
        }
        image={product.sizeGuide}
        title={`${product.name} Size Guide`}
      />
    </>
  );
}

// =====================================================
// ACCORDION
// =====================================================

interface AccordionItemProps {
  label: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function AccordionItem({
  label,
  open,
  onClick,
  children,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          py-5
          text-left
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-zinc-500
            transition-colors
            hover:text-white
          "
        >
          {label}
        </span>

        <span
          className={`
            text-zinc-600
            transition-all
            duration-300

            ${
              open
                ? "rotate-45 text-white"
                : ""
            }
          `}
        >
          +
        </span>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300

          ${
            open
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="max-w-md text-xs leading-6 text-zinc-500">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
