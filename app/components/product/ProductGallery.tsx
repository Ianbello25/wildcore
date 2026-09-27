import Image from "next/image";
import { Product } from "../home/Collections/data";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const gallery = [
    ...product.images,
    ...(product.lifestyleImages ?? []),
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {gallery.map((image, index) => {
        const isFirst = index === 0;

        return (
          <div
            key={`${image}-${index}`}
            className={`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#070707]
              transition-colors
              duration-500
              hover:border-white/20
              ${
                isFirst
                  ? "aspect-[16/11] md:col-span-2"
                  : "aspect-[4/5]"
              }
            `}
          >
            <Image
              src={image}
              alt={`${product.name} ${index + 1}`}
              fill
              priority={index === 0}
              sizes={
                isFirst
                  ? "(max-width: 1024px) 100vw, 65vw"
                  : "(max-width: 768px) 100vw, 35vw"
              }
              className={`
                object-contain
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
                ${
                  isFirst
                    ? "p-4 md:p-7"
                    : "p-3 md:p-5"
                }
              `}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="text-[8px] uppercase tracking-[0.35em] text-white/35">
                {index === 0
                  ? "PRIMARY"
                  : index === 1
                    ? "BACK"
                    : `VIEW ${String(index + 1).padStart(2, "0")}`}
              </span>
            </div>

            <div className="absolute bottom-5 right-5">
              <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        );
      })}

      {product.video && (
        <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] md:col-span-2">
          <video
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />

          <div className="absolute left-5 top-5 border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
            <span className="text-[8px] uppercase tracking-[0.35em] text-white/70">
              WILDCORE MOTION
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
