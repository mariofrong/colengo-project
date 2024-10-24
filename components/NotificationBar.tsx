import Image from "next/image";
import React from "react";

const NotificationBar: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      <div className="mx-auto px-4">
        <div className="flex justify-center items-center gap-8 text-sm text-gray-600 h-14">
          <div className="flex items-center space-x-2">
            <span>★★★★★</span>
            <span>Klanten waarderen ons met een 9.1!</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src="/icons/trucks.svg"
                  width={20}
                  height={20}
                  alt="truck-icon"
                />
              </span>
              <span>Gratis bezorging door heel Nederland</span>
            </div>

            <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src="/icons/sales.svg"
                  width={20}
                  height={20}
                  alt="sales-icon"
                />
              </span>
              <span>Bezoek onze showroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
