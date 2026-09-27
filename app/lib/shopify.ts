const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_PRIVATE_TOKEN =
  process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;
const SHOPIFY_STOREFRONT_API_VERSION =
  process.env.SHOPIFY_STOREFRONT_API_VERSION;

type ShopifyResponse<T> = {
  data?: T;
  errors?: Array<{
    message: string;
  }>;
};

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  if (
    !SHOPIFY_STORE_DOMAIN ||
    !SHOPIFY_STOREFRONT_PRIVATE_TOKEN ||
    !SHOPIFY_STOREFRONT_API_VERSION
  ) {
    throw new Error(
      "Faltan las variables de entorno necesarias para conectar con Shopify."
    );
  }

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token":
        SHOPIFY_STOREFRONT_PRIVATE_TOKEN,
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    cache: "no-store",
  });

  const result = (await response.json()) as ShopifyResponse<T>;

  if (!response.ok) {
    throw new Error(
      `Shopify respondió con HTTP ${response.status}.`
    );
  }

  if (result.errors?.length) {
    throw new Error(
      result.errors.map((error) => error.message).join(" | ")
    );
  }

  if (!result.data) {
    throw new Error("Shopify no devolvió datos.");
  }

  return result.data;
}