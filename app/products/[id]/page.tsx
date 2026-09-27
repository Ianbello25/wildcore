import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "../../components/layout/Navbar";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";

import {
  collections,
  type Product,
} from "../../components/home/Collections/data";

// =====================================================
// TYPES
// =====================================================

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// =====================================================
// FIND PRODUCT
// =====================================================

function findProductById(
  id: string
): Product | undefined {
  for (const collection of collections) {
    for (const category of collection.categories) {
      const product = category.items.find(
        (item) => item.id === id
      );

      if (product) {
        return product;
      }
    }
  }

  return undefined;
}

// =====================================================
// GENERATE PRODUCT ROUTES
// =====================================================

export function generateStaticParams() {
  return collections.flatMap((collection) =>
    collection.categories.flatMap((category) =>
      category.items.map((product) => ({
        id: product.id,
      }))
    )
  );
}

// =====================================================
// DYNAMIC METADATA
// =====================================================

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = findProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | WILDCORE",
    };
  }

  const description =
    product.description ??
    `${product.name} by WILDCORE. Designed in Mexico.`;

  return {
    title: `${product.name} | WILDCORE`,

    description,

    openGraph: {
      title: `${product.name} | WILDCORE`,

      description,

      type: "website",

      images:
        product.images.length > 0
          ? [
              {
                url: product.images[0],
                alt: product.name,
              },
            ]
          : [],
    },
  };
}

// =====================================================
// PRODUCT PAGE
// =====================================================

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = findProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-36">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12

            lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.65fr)]
            lg:gap-16
          "
        >
          {/* =========================================
              PRODUCT MEDIA
          ========================================= */}

          <ProductGallery product={product} />

          {/* =========================================
              PRODUCT INFORMATION
          ========================================= */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
