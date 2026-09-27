import { shopifyFetch } from "./shopify";

// =====================================================
// TYPES
// =====================================================

export interface ShopifyCartMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;

  merchandise: {
    id: string;
    title: string;

    product: {
      id: string;
      title: string;
      handle: string;
    };

    selectedOptions: {
      name: string;
      value: string;
    }[];
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;

  cost: {
    subtotalAmount: ShopifyCartMoney;
    totalAmount: ShopifyCartMoney;
  };

  lines: {
    nodes: ShopifyCartLine[];
  };
}

interface ShopifyUserError {
  field?: string[];
  message: string;
}

interface CartCreateResponse {
  cartCreate: {
    cart: ShopifyCart | null;
    userErrors: ShopifyUserError[];
  };
}

interface CartLinesAddResponse {
  cartLinesAdd: {
    cart: ShopifyCart | null;
    userErrors: ShopifyUserError[];
  };
}

interface CartLinesUpdateResponse {
  cartLinesUpdate: {
    cart: ShopifyCart | null;
    userErrors: ShopifyUserError[];
  };
}

interface CartLinesRemoveResponse {
  cartLinesRemove: {
    cart: ShopifyCart | null;
    userErrors: ShopifyUserError[];
  };
}

// =====================================================
// CART FIELDS
// =====================================================

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity

  cost {
    subtotalAmount {
      amount
      currencyCode
    }

    totalAmount {
      amount
      currencyCode
    }
  }

  lines(first: 100) {
    nodes {
      id
      quantity

      merchandise {
        ... on ProductVariant {
          id
          title

          product {
            id
            title
            handle
          }

          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

// =====================================================
// CREATE CART
// =====================================================

const CART_CREATE_MUTATION = `
  mutation CartCreate($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(
      input: {
        lines: [
          {
            merchandiseId: $merchandiseId
            quantity: $quantity
          }
        ]
      }
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export async function createShopifyCart({
  merchandiseId,
  quantity = 1,
}: {
  merchandiseId: string;
  quantity?: number;
}): Promise<ShopifyCart> {
  const data = await shopifyFetch<CartCreateResponse>({
    query: CART_CREATE_MUTATION,

    variables: {
      merchandiseId,
      quantity,
    },
  });

  const { cart, userErrors } = data.cartCreate;

  if (userErrors.length > 0) {
    throw new Error(
      userErrors
        .map((error) => error.message)
        .join(" | ")
    );
  }

  if (!cart) {
    throw new Error(
      "Shopify no pudo crear el carrito."
    );
  }

  return cart;
}

// =====================================================
// ADD LINE
// =====================================================

const CART_LINES_ADD_MUTATION = `
  mutation CartLinesAdd(
    $cartId: ID!
    $merchandiseId: ID!
    $quantity: Int!
  ) {
    cartLinesAdd(
      cartId: $cartId
      lines: [
        {
          merchandiseId: $merchandiseId
          quantity: $quantity
        }
      ]
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export async function addShopifyCartLine({
  cartId,
  merchandiseId,
  quantity = 1,
}: {
  cartId: string;
  merchandiseId: string;
  quantity?: number;
}): Promise<ShopifyCart> {
  const data =
    await shopifyFetch<CartLinesAddResponse>({
      query: CART_LINES_ADD_MUTATION,

      variables: {
        cartId,
        merchandiseId,
        quantity,
      },
    });

  const { cart, userErrors } =
    data.cartLinesAdd;

  if (userErrors.length > 0) {
    throw new Error(
      userErrors
        .map((error) => error.message)
        .join(" | ")
    );
  }

  if (!cart) {
    throw new Error(
      "Shopify no pudo agregar el producto al carrito."
    );
  }

  return cart;
}

// =====================================================
// UPDATE LINE
// =====================================================

const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate(
    $cartId: ID!
    $lineId: ID!
    $quantity: Int!
  ) {
    cartLinesUpdate(
      cartId: $cartId
      lines: [
        {
          id: $lineId
          quantity: $quantity
        }
      ]
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export async function updateShopifyCartLine({
  cartId,
  lineId,
  quantity,
}: {
  cartId: string;
  lineId: string;
  quantity: number;
}): Promise<ShopifyCart> {
  const data =
    await shopifyFetch<CartLinesUpdateResponse>({
      query: CART_LINES_UPDATE_MUTATION,

      variables: {
        cartId,
        lineId,
        quantity,
      },
    });

  const { cart, userErrors } =
    data.cartLinesUpdate;

  if (userErrors.length > 0) {
    throw new Error(
      userErrors
        .map((error) => error.message)
        .join(" | ")
    );
  }

  if (!cart) {
    throw new Error(
      "Shopify no pudo actualizar el carrito."
    );
  }

  return cart;
}

// =====================================================
// REMOVE LINE
// =====================================================

const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
  ) {
    cartLinesRemove(
      cartId: $cartId
      lineIds: $lineIds
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export async function removeShopifyCartLine({
  cartId,
  lineId,
}: {
  cartId: string;
  lineId: string;
}): Promise<ShopifyCart> {
  const data =
    await shopifyFetch<CartLinesRemoveResponse>({
      query: CART_LINES_REMOVE_MUTATION,

      variables: {
        cartId,
        lineIds: [lineId],
      },
    });

  const { cart, userErrors } =
    data.cartLinesRemove;

  if (userErrors.length > 0) {
    throw new Error(
      userErrors
        .map((error) => error.message)
        .join(" | ")
    );
  }

  if (!cart) {
    throw new Error(
      "Shopify no pudo eliminar el producto del carrito."
    );
  }

  return cart;
}
