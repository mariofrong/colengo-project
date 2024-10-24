import React from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/commons";
import useBreakpoint from "use-breakpoint";

interface ProductPreviewProps {
  name: string;
  price: number;
  image: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  name,
  price,
  image,
}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[calc(220px-2rem)] mt-10">
        <div className="relative h-40">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="mt-3">
          <h3 className="font-light text-sm text-center">{name}</h3>
          <p className="font-medium mt-1 text-center">
            {price.toLocaleString("nl-NL")},-
          </p>
        </div>
      </div>
    </div>
  );
};

const PromoteSection: React.FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "smallMobile");

  return (
    <section>
      <div className="flex w-full">
        <div className="w-0 md:w-1/3 mr-0 md:mr-2">
          <div
            className="hidden md:flex h-[600px] lg:h-[720px] w-full justify-end relative bg-center bg-cover flex-none px-24"
            style={{
              backgroundImage: `url("/images/furniture2-background.png")`,
            }}
          >
            <ProductPreview
              name="Luxe loungeset teak KOEN"
              price={6225}
              image="/images/products/furniture1.png"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div
            className="h-[250px] sm:h-[600px] lg:h-[720px] w-full flex items-center relative bg-center bg-cover flex-none px-8"
            style={{
              backgroundImage: `url("/images/furniture-background.png")`,
            }}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/images/white-logo.png"
                width={660}
                height={161}
                alt="white-logo"
              />
              {breakpoint !== "smallMobile" && (
                <div className="flex flex-row gap-4 mt-6">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition-colors font-bold">
                    Bekijk onze tuinmeubelen
                  </button>
                  <button className="bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition-colors font-bold opacity-70">
                    Bekijk onze loungemeubelen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {breakpoint === "smallMobile" && (
        <div className="w-full flex gap-1 mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/furniture-mobile-background1.png"
            alt=""
            title=""
            className="w-1/2"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/furniture-mobile-background.png"
            alt=""
            title=""
            className="w-1/2"
          />
        </div>
      )}
    </section>
  );
};

export default PromoteSection;
