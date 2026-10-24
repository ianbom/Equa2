import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white"
    >
      {/* Image container matching reference subtle off-white/light gray #f4f4f2 */}
      <div className="relative aspect-square w-full bg-[#f4f4f2] overflow-hidden flex items-center justify-center p-6">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Info Bar */}
      <div className="pt-4 flex items-center justify-between text-xs">
        <div className="min-w-0 pr-2">
          <h3 className="font-medium text-[#1b1b1b] truncate group-hover:text-[#f05c1a] transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] text-[#5a5758] mt-0.5 truncate">
            {product.categoryLabel} &bull; {product.subcategoryLabel}
          </p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#5a5758] group-hover:text-[#f05c1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
      </div>
    </Link>
  );
}
