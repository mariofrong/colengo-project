import { Product } from "@/types/product";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils/commons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface CustomSwiperProps {
  products: Product[];
}

const ProductSection: React.FC<CustomSwiperProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.floor((products.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={breakpoint === "mobile" ? 2 : 4}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex items-center justify-end mt-8 space-x-4">
        <span className="text-sm font-light mr-4">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={prevSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/left-arrow.svg"
            width={32}
            height={32}
            alt="left-arrow"
          />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/right-arrow.svg"
            width={32}
            height={32}
            alt="right-arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
