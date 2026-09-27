"use client";

import { useCart } from "./CartContext";

export default function CartButton() {
  const {
    cartCount,
    openCart,
  } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open bag with ${cartCount} items`}
      className="
        group
        relative
        flex
        items-center
        gap-2
        text-[9px]
        tracking-[0.15em]
        text-zinc-400
        transition-colors
        hover:text-white
      "
    >
      <span>Bag</span>

      <span
        className="
          flex
          h-[18px]
          min-w-[18px]
          items-center
          justify-center
          rounded-full
          bg-[#E31B23]
          px-1
          text-[8px]
          font-bold
          text-white
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {cartCount}
      </span>
    </button>
  );
}