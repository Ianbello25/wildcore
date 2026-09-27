import { NextRequest, NextResponse } from "next/server";

import { shopifyFetch } from "../../lib/shopify";

// =====================================================
// TYPES
// =====================================================

interface CheckoutLine {
  merchandiseId: string;
  quantity: number;
}

interface ShopifyCheckoutCart {
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
}

interface ShopifyUserError {
  field?: string[];
  message: string;
}

interface CartCreateResponse {
  cartCreate: {
    cart: ShopifyCheckoutCart | null;
    userErrors: ShopifyUserError[];
  };
}

// =====================================================
// MUTATION
// =====================================================

const CREATE_CHECKOUT_CART_MUTATION = `
  mutation CreateCheckoutCart(
    $lines: [CartLineInput!]!
  ) {
    cartCreate(
      input: {
        lines: $lines
      }
    ) {
      cart {
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
      }

      userErrors {
        field
        message
      }
    }
  }
`;

// =====================================================
// POST
// =====================================================

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const lines = body.lines as
      | CheckoutLine[]
      | undefined;

    // ===============================================
    // VALIDATE CART
    // ===============================================

    if (
      !Array.isArray(lines) ||
      lines.length === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "El carrito está vacío.",
        },
        {
          status: 400,
        }
      );
    }

    // ===============================================
    // VALIDATE EACH LINE
    // ===============================================

    const invalidLine = lines.some(
      (line) =>
        !line.merchandiseId ||
        typeof line.merchandiseId !==
          "string" ||
        !Number.isInteger(line.quantity) ||
        line.quantity <= 0
    );

    if (invalidLine) {
      return NextResponse.json(
        {
          success: false,
          message:
            "El carrito contiene una variante o cantidad inválida.",
        },
        {
          status: 400,
        }
      );
    }

    // ===============================================
    // CREATE SHOPIFY CART
    // ===============================================

    const data =
      await shopifyFetch<CartCreateResponse>({
        query:
          CREATE_CHECKOUT_CART_MUTATION,

        variables: {
          lines,
        },
      });

    const { cart, userErrors } =
      data.cartCreate;

    // ===============================================
    // SHOPIFY ERRORS
    // ===============================================

    if (userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: userErrors
            .map(
              (error) =>
                error.message
            )
            .join(" | "),
        },
        {
          status: 400,
        }
      );
    }

    if (!cart) {
      throw new Error(
        "Shopify no pudo crear el carrito para checkout."
      );
    }

    // ===============================================
    // SUCCESS
    // ===============================================

    return NextResponse.json({
      success: true,

      cart: {
        id: cart.id,

        checkoutUrl:
          cart.checkoutUrl,

        totalQuantity:
          cart.totalQuantity,

        cost: cart.cost,
      },
    });
  } catch (error) {
    console.error(
      "Error creando checkout de Shopify:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Error desconocido creando el checkout.",
      },
      {
        status: 500,
      }
    );
  }
}
