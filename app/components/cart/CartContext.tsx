"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

// =====================================================
// TYPES
// =====================================================

export interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  price?: number;
  quantity: number;

  // Shopify
  shopifyVariantId?: string;
}

interface AddToCartProduct {
  id: string;
  name: string;
  image: string;
  size: string;
  price?: number;

  // Shopify
  shopifyVariantId?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;

  cartCount: number;
  subtotal: number;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (product: AddToCartProduct) => void;

  removeItem: (
    id: string,
    size: string
  ) => void;

  increaseQuantity: (
    id: string,
    size: string
  ) => void;

  decreaseQuantity: (
    id: string,
    size: string
  ) => void;

  clearCart: () => void;
}

// =====================================================
// CONTEXT
// =====================================================

const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );

const STORAGE_KEY = "wildcore-cart";

// =====================================================
// PROVIDER
// =====================================================

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const [hydrated, setHydrated] =
    useState(false);

  // ===============================================
  // LOAD CART
  // ===============================================

  useEffect(() => {
    try {
      const savedCart =
        localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error(
        "Could not load WILDCORE cart:",
        error
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  // ===============================================
  // SAVE CART
  // ===============================================

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error(
        "Could not save WILDCORE cart:",
        error
      );
    }
  }, [items, hydrated]);

  // ===============================================
  // BLOCK PAGE SCROLL
  // ===============================================

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        originalOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen]);

  // ===============================================
  // ADD
  // ===============================================

  const addItem = (
    product: AddToCartProduct
  ) => {
    setItems((currentItems) => {
      const existingItem =
        currentItems.find(
          (item) =>
            item.id === product.id &&
            item.size === product.size
        );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                shopifyVariantId:
                  product.shopifyVariantId ??
                  item.shopifyVariantId,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setIsOpen(true);
  };

  // ===============================================
  // REMOVE
  // ===============================================

  const removeItem = (
    id: string,
    size: string
  ) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  // ===============================================
  // INCREASE
  // ===============================================

  const increaseQuantity = (
    id: string,
    size: string
  ) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id &&
        item.size === size
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  // ===============================================
  // DECREASE
  // ===============================================

  const decreaseQuantity = (
    id: string,
    size: string
  ) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id &&
          item.size === size
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  // ===============================================
  // CLEAR
  // ===============================================

  const clearCart = () => {
    setItems([]);
  };

  // ===============================================
  // TOTALS
  // ===============================================

  const cartCount = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total +
          (item.price ?? 0) *
            item.quantity,
        0
      ),
    [items]
  );

  // ===============================================
  // PROVIDER
  // ===============================================

  return (
    <CartContext.Provider
      value={{
        items,

        isOpen,

        cartCount,

        subtotal,

        openCart: () =>
          setIsOpen(true),

        closeCart: () =>
          setIsOpen(false),

        toggleCart: () =>
          setIsOpen(
            (current) => !current
          ),

        addItem,

        removeItem,

        increaseQuantity,

        decreaseQuantity,

        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// =====================================================
// HOOK
// =====================================================

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
