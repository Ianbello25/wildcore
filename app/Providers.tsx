"use client";

import { ReactNode } from "react";

import {
  CartProvider,
} from "./components/cart/CartContext";

import CartDrawer from "./components/cart/CartDrawer";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <CartProvider>
      {children}

      <CartDrawer />
    </CartProvider>
  );
}
