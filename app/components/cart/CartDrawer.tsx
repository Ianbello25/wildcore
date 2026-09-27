"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "./CartContext";

interface CheckoutResponse {
  success: boolean;

  message?: string;

  cart?: {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;

    cost: {
      subtotalAmount: {
        amount: string;
        currencyCode: string;
      };

      totalAmount: {
        amount: string;
        currencyCode: string;
      };
    };
  };
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    closeCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [
    isCheckingOut,
    setIsCheckingOut,
  ] = useState(false);

  const [
    checkoutError,
    setCheckoutError,
  ] = useState<string | null>(null);

  // ===============================================
  // CHECKOUT
  // ===============================================

  const handleCheckout = async () => {
    if (
      items.length === 0 ||
      isCheckingOut
    ) {
      return;
    }

    setIsCheckingOut(true);
    setCheckoutError(null);

    try {
      // ===========================================
      // VERIFY SHOPIFY VARIANTS
      // ===========================================

      const missingShopifyProduct =
        items.find(
          (item) =>
            !item.shopifyVariantId
        );

      if (missingShopifyProduct) {
        throw new Error(
          `${missingShopifyProduct.name} todavía no está conectado a Shopify.`
        );
      }

      // ===========================================
      // BUILD SHOPIFY CART LINES
      // ===========================================

      const lines = items.map(
        (item) => ({
          merchandiseId:
            item.shopifyVariantId as string,

          quantity:
            item.quantity,
        })
      );

      // ===========================================
      // CREATE CHECKOUT
      // ===========================================

      const response = await fetch(
        "/api/shopify-checkout",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            lines,
          }),
        }
      );

      const data =
        (await response.json()) as CheckoutResponse;

      if (
        !response.ok ||
        !data.success ||
        !data.cart?.checkoutUrl
      ) {
        throw new Error(
          data.message ??
            "No se pudo preparar el checkout."
        );
      }

      // ===========================================
      // REDIRECT TO SHOPIFY CHECKOUT
      // ===========================================

      window.location.assign(
        data.cart.checkoutUrl
      );
    } catch (error) {
      console.error(
        "Could not start Shopify checkout:",
        error
      );

      setCheckoutError(
        error instanceof Error
          ? error.message
          : "No se pudo iniciar el checkout."
      );

      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[200]
          bg-black/70 backdrop-blur-[2px]
          transition-opacity duration-500
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* CART DRAWER */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`
          fixed bottom-0 right-0 top-0 z-[300]
          flex w-full max-w-[460px] flex-col
          border-l border-white/10
          bg-[#050505]
          shadow-[-30px_0_80px_rgba(0,0,0,0.55)]
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E31B23]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.45em] text-[#E31B23]">
                WILDCORE
              </span>
            </div>

            <h2 className="mt-3 text-xl font-bold uppercase tracking-[0.12em] text-white">
              Your Bag
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-white/10
              text-lg text-zinc-500
              transition-all duration-300
              hover:border-white/30
              hover:bg-white/5
              hover:text-white
            "
          >
            ×
          </button>
        </div>

        {/* CART CONTENT */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <EmptyCart
              closeCart={closeCart}
            />
          ) : (
            <div className="divide-y divide-white/10">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.size}`}
                  className="flex gap-5 py-6"
                >
                  {/* PRODUCT IMAGE */}
                  <Link
                    href={`/products/${item.id}`}
                    onClick={closeCart}
                    className="
                      relative h-32 w-28 shrink-0
                      overflow-hidden
                      border border-white/10
                      bg-[#090909]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-contain p-2"
                    />
                  </Link>

                  {/* PRODUCT INFO */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.35em] text-[#E31B23]">
                      WILDCORE
                    </span>

                    <Link
                      href={`/products/${item.id}`}
                      onClick={closeCart}
                      className="mt-2"
                    >
                      <h3 className="text-sm font-semibold uppercase leading-5 tracking-[0.06em] text-white transition-colors hover:text-[#E31B23]">
                        {item.name}
                      </h3>
                    </Link>

                    <p
                      translate="no"
                      className="mt-2 text-[9px] uppercase tracking-[0.3em] text-zinc-600"
                    >
                      SIZE {item.size}
                    </p>

                    {item.price !==
                    undefined ? (
                      <p className="mt-3 text-xs text-zinc-300">
                        $
                        {item.price.toLocaleString(
                          "es-MX"
                        )}{" "}
                        MXN
                      </p>
                    ) : (
                      <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                        PRICE COMING SOON
                      </p>
                    )}

                    {/* QUANTITY */}
                    <div className="mt-auto flex items-end justify-between pt-4">
                      <div className="flex h-9 items-center border border-white/10">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => {
                            setCheckoutError(
                              null
                            );

                            decreaseQuantity(
                              item.id,
                              item.size
                            );
                          }}
                          className="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          −
                        </button>

                        <span className="flex h-full min-w-9 items-center justify-center border-x border-white/10 text-[10px] text-white">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => {
                            setCheckoutError(
                              null
                            );

                            increaseQuantity(
                              item.id,
                              item.size
                            );
                          }}
                          className="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setCheckoutError(
                            null
                          );

                          removeItem(
                            item.id,
                            item.size
                          );
                        }}
                        className="text-[7px] uppercase tracking-[0.25em] text-zinc-600 transition-colors hover:text-[#E31B23]"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="shrink-0 border-t border-white/10 bg-[#060606] px-6 pb-7 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                Subtotal
              </span>

              {subtotal > 0 ? (
                <span className="text-sm font-semibold text-white">
                  $
                  {subtotal.toLocaleString(
                    "es-MX"
                  )}{" "}
                  MXN
                </span>
              ) : (
                <span className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                  PRICE PENDING
                </span>
              )}
            </div>

            <p className="mt-3 text-[9px] leading-5 text-zinc-600">
              Taxes and shipping calculated at checkout.
            </p>

            {/* CHECKOUT ERROR */}
            {checkoutError && (
              <p className="mt-4 text-xs leading-5 text-[#E31B23]">
                {checkoutError}
              </p>
            )}

            {/* CHECKOUT */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="
                mt-6 flex h-16 w-full
                items-center justify-between
                bg-white px-6
                text-[9px] font-bold uppercase
                tracking-[0.3em] text-black
                transition-all duration-300

                enabled:hover:bg-[#E31B23]
                enabled:hover:text-white

                disabled:cursor-wait
                disabled:bg-zinc-800
                disabled:text-zinc-500
              "
            >
              <span>
                {isCheckingOut
                  ? "PREPARING CHECKOUT..."
                  : "PROCEED TO CHECKOUT"}
              </span>

              <span>
                {isCheckingOut
                  ? "..."
                  : "→"}
              </span>
            </button>

            <button
              type="button"
              onClick={closeCart}
              disabled={isCheckingOut}
              className="
                mt-4 w-full text-center
                text-[8px] uppercase
                tracking-[0.3em]
                text-zinc-600
                transition-colors
                enabled:hover:text-white
                disabled:cursor-wait
              "
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// =====================================================
// EMPTY CART
// =====================================================

function EmptyCart({
  closeCart,
}: {
  closeCart: () => void;
}) {
  return (
    <div className="flex h-full min-h-[420px] items-center justify-center px-4 text-center">
      <div className="max-w-[280px]">
        <div className="mx-auto h-px w-10 bg-[#E31B23]" />

        <p className="mt-5 text-[8px] uppercase tracking-[0.4em] text-zinc-600">
          WILDCORE BAG
        </p>

        <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-white">
          Your Bag Is Empty.
        </h3>

        <p className="mt-4 text-xs leading-6 text-zinc-600">
          The next piece of your WILDCORE rotation is waiting.
        </p>

        <button
          type="button"
          onClick={closeCart}
          className="
            mt-8 border border-white/20
            px-7 py-4
            text-[8px] font-semibold uppercase
            tracking-[0.3em] text-white
            transition-all
            hover:border-[#E31B23]
            hover:text-[#E31B23]
          "
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
