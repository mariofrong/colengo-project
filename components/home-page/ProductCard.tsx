import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/3] mb-4">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.tag && (
            <span className="absolute top-4 left-4 bg-[#473A38] text-white px-3 py-1 rounded-lg text-sm font-light">
              {product.tag}
            </span>
          )}
        </div>
      </div>
      <h3 className="text-center font-light text-sm mb-2">{product.name}</h3>
      <p className="font-medium">€{product.price.toLocaleString("nl-NL")},-</p>
    </div>
  );
};

export default ProductCard;
