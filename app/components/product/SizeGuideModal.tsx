"use client";

import Image from "next/image";
import { useEffect } from "react";

interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
  image?: string;
  title?: string;
}

export default function SizeGuideModal({
  open,
  onClose,
  image,
  title = "Size Guide",
}: SizeGuideModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/85
        px-4
        py-6
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-5xl
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#070707]
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-5
            md:px-8
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E31B23]" />

              <p className="text-[8px] uppercase tracking-[0.4em] text-[#E31B23]">
                WILDCORE
              </p>
            </div>

            <h2 className="mt-3 text-xl font-semibold uppercase tracking-[0.15em] text-white md:text-2xl">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-2xl
              font-light
              text-zinc-500
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/5
              hover:text-white
            "
            aria-label="Close size guide"
          >
            ×
          </button>
        </div>

        {/* CONTENT */}
        <div className="max-h-[calc(92vh-90px)] overflow-y-auto">
          {image ? (
            <div className="relative min-h-[620px] w-full bg-black md:min-h-[760px]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain p-4 md:p-8"
              />
            </div>
          ) : (
            <div className="flex min-h-[460px] items-center justify-center px-8 py-16 text-center">
              <div className="max-w-md">
                <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-700">
                  WILDCORE FIT SYSTEM
                </p>

                <h3 className="mt-5 text-2xl font-semibold uppercase text-white">
                  Size guide coming soon.
                </h3>

                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  Measurements for this piece are currently being prepared.
                  Please check back soon for the complete WILDCORE fit guide.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
