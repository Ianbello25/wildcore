import { NextResponse } from "next/server";

import { getShopifyProducts } from "../../lib/shopify-products";

export async function GET() {
  try {
    const products = await getShopifyProducts();

    const mappedProducts = products.map((product) => ({
      title: product.title,
      handle: product.handle,
      availableForSale: product.availableForSale,
      price: product.priceRange.minVariantPrice,

      variants: product.variants.nodes.map((variant) => ({
        id: variant.id,
        title: variant.title,
        availableForSale: variant.availableForSale,
        price: variant.price,
        options: variant.selectedOptions,
      })),
    }));

    return NextResponse.json({
      success: true,
      totalProducts: mappedProducts.length,
      products: mappedProducts,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Error desconocido obteniendo productos de Shopify.",
      },
      { status: 500 }
    );
  }
}
