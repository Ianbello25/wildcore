import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <a
          href="#"
          aria-label="WILDCORE Home"
          className="group flex items-center"
        >
          <Image
            src="/images/wdce-logo.png"
            alt="WDCE"
            width={110}
            height={55}
            priority
            className="navbar-logo"
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-9 text-xs font-medium uppercase tracking-[0.2em] md:flex">
          <a href="#shop" className="nav-link">
            Shop
          </a>

          <a href="#shop" className="nav-link">
            New Drop
          </a>

          <a href="#collections" className="nav-link">
            Collections
          </a>

          <a href="#about" className="nav-link">
            About
          </a>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Buscar productos"
            className="nav-icon"
          >
            SEARCH
          </button>

          <button
            type="button"
            aria-label="Abrir bolsa de compras"
            className="relative nav-icon"
          >
            BAG

            <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#e31b23] text-[9px] text-white">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}