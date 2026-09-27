"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import CartButton from "../cart/CartButton";
import SearchOverlay from "../search/SearchOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.28)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* =========================================
              LOGO
          ========================================= */}

          <a
            href="/"
            aria-label="WILDCORE Home"
            className="group flex items-center"
          >
            <Image
              src="/images/wdce-logo.png"
              alt="WILDCORE"
              width={120}
              height={50}
              className={`navbar-logo transition-transform duration-500 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
              priority
            />
          </a>

          {/* =========================================
              DESKTOP MENU
          ========================================= */}

          <div className="hidden items-center gap-9 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <a href="/#shop" className="nav-link">
              Shop
            </a>

            <a href="/#new-drop" className="nav-link">
              New Drop
            </a>

            <a href="/#collections" className="nav-link">
              Collections
            </a>

            <a href="/#about" className="nav-link">
              About
            </a>
          </div>

          {/* =========================================
              ACTIONS
          ========================================= */}

          <div className="flex items-center gap-5">
            {/* SEARCH */}

            <button
              type="button"
              aria-label="Buscar productos"
              className="nav-icon"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>

            {/* CART */}

            <CartButton />
          </div>
        </nav>
      </header>

      {/* =========================================
          SEARCH OVERLAY
      ========================================= */}

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
