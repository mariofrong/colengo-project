import { BREAKPOINTS } from "@/utils/commons";
import Image from "next/image";
import useBreakpoint from "use-breakpoint";

export const Header: React.FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <header className="w-full bg-secondary-500 px-4 md:px-8 lg:px-16 xl:px-32 py-4 md:py-6 border-b overflow-x-auto">
      <div className="flex justify-between items-center">
        <div className="flex md:hidden space-x-4">
          <Image
            src="/icons/hamburg-icon.svg"
            width={breakpoint === "smallMobile" ? 20 : 24}
            height={breakpoint === "smallMobile" ? 20 : 24}
            alt="search-icon"
          />
          <Image
            src="/icons/search-icon.svg"
            width={breakpoint === "smallMobile" ? 20 : 24}
            height={breakpoint === "smallMobile" ? 20 : 24}
            alt="search-icon"
          />
          <div className="w-5 flex md:hidden" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="&MOSS"
          className="h-8 ml-4 sm:ml-0 mr-4"
        />

        <span className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 ">
            EXCLUSIEVE TUINMEUBELEN
          </a>
          <a href="#" className="text-gray-800 ">
            LUXE LOUNGEEMEUBELEN
          </a>
          <a href="#" className="text-gray-800">
            MATERIALEN
          </a>
          <a href="#" className="text-gray-800 ">
            TUINACCESSOIRES
          </a>
          <a href="#" className="text-gray-800">
            OVER ONS
          </a>
        </span>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-3 sm:space-x-4">
            <select className="border-none bg-secondary-500 hidden md:flex">
              <option value="nl">NL</option>
              <option value="en">EN</option>
            </select>
            <Image
              className="hidden md:flex cursor-pointer"
              src="/icons/search-icon.svg"
              width={breakpoint === "smallMobile" ? 20 : 24}
              height={breakpoint === "smallMobile" ? 20 : 24}
              alt="search-icon"
            />
            <Image
              className="cursor-pointer"
              src="/icons/heart-icon.svg"
              width={breakpoint === "smallMobile" ? 20 : 24}
              height={breakpoint === "smallMobile" ? 20 : 24}
              alt="heart-icon"
            />
            <Image
              className="cursor-pointer"
              src="/icons/cart-icon.svg"
              width={breakpoint === "smallMobile" ? 20 : 24}
              height={breakpoint === "smallMobile" ? 20 : 24}
              alt="cart-icon"
            />
            <Image
              className="cursor-pointer"
              src="/icons/profile-icon.svg"
              width={breakpoint === "smallMobile" ? 20 : 24}
              height={breakpoint === "smallMobile" ? 20 : 24}
              alt="profile-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
