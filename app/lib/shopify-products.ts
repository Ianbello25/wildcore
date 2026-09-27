import { shopifyFetch } from "./shopify";

// =====================================================
// TYPES
// =====================================================

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifySelectedOption {
  name: string;
  value: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyMoney;
  selectedOptions: ShopifySelectedOption[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  availableForSale: boolean;

  priceRange: {
    minVariantPrice: ShopifyMoney;
  };

  variants: {
    nodes: ShopifyVariant[];
  };
}

interface ShopifyProductsResponse {
  products: {
    nodes: ShopifyProduct[];
  };
}

interface ShopifyProductByHandleResponse {
  product: ShopifyProduct | null;
}

// =====================================================
// QUERIES
// =====================================================

const GET_PRODUCTS_QUERY = `
  query GetProducts {
    products(first: 100) {
      nodes {
        id
        title
        handle
        availableForSale

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }

        variants(first: 100) {
          nodes {
            id
            title
            availableForSale

            price {
              amount
              currencyCode
            }

            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      availableForSale

      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }

      variants(first: 100) {
        nodes {
          id
          title
          availableForSale

          price {
            amount
            currencyCode
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
// PRODUCTS
// =====================================================

export async function getShopifyProducts(): Promise<
  ShopifyProduct[]
> {
  const data = await shopifyFetch<ShopifyProductsResponse>({
    query: GET_PRODUCTS_QUERY,
  });

  return data.products.nodes;
}

// =====================================================
// PRODUCT BY HANDLE
// =====================================================

export async function getShopifyProductByHandle(
  handle: string
): Promise<ShopifyProduct | undefined> {
  const data =
    await shopifyFetch<ShopifyProductByHandleResponse>({
      query: GET_PRODUCT_BY_HANDLE_QUERY,

      variables: {
        handle,
      },
    });

  return data.product ?? undefined;
}

// =====================================================
// VARIANT FINDER
// =====================================================

export async function getShopifyVariant({
  handle,
  color,
  size,
}: {
  handle: string;
  color?: string;
  size?: string;
}): Promise<ShopifyVariant | undefined> {
  const product = await getShopifyProductByHandle(handle);

  if (!product) {
    return undefined;
  }

  const normalize = (value: string) =>
    value.trim().toLowerCase();

  return product.variants.nodes.find((variant) => {
    const colorMatches = color
      ? variant.selectedOptions.some(
          (option) =>
            normalize(option.name) === "color" &&
            normalize(option.value) === normalize(color)
        )
      : true;

    const sizeMatches = size
      ? variant.selectedOptions.some(
          (option) =>
            normalize(option.name) === "talla" &&
            normalize(option.value) === normalize(size)
        )
      : true;

    return colorMatches && sizeMatches;
  });
}
