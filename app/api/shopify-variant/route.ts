import { NextRequest, NextResponse } from "next/server";

import { getShopifyVariant } from "../../lib/shopify-products";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      handle,
      color,
      size,
    } = body as {
      handle?: string;
      color?: string;
      size?: string;
    };

    if (!handle) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Falta el handle del producto de Shopify.",
        },
        {
          status: 400,
        }
      );
    }

    if (!size) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Falta seleccionar una talla.",
        },
        {
          status: 400,
        }
      );
    }

    const variant = await getShopifyVariant({
      handle,
      color,
      size,
    });
 
    if (!variant) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No se encontró una variante de Shopify para esta combinación.",
        },
        {
          status: 404,
        }
      );
    }

    if (!variant.availableForSale) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Esta variante no está disponible para venta.",
        },
        {
          status: 409,
        }
      );
    }

    return NextResponse.json({
      success: true,

      variant: {
        id: variant.id,
        title: variant.title,
        availableForSale:
          variant.availableForSale,
        price: variant.price,
        selectedOptions:
          variant.selectedOptions,
      },
    });
  } catch (error) {
    console.error(
      "Error resolviendo variante de Shopify:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Error desconocido consultando la variante.",
      },
      {
        status: 500,
      }
    );
  }
}