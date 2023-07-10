import React from "react";
import Link from "next/link";
import HeroBanner from "./banner";

const ClothesCategory: React.FC = () => {
  return (
    <div className="bg-white py-2 h-[1000px] text-black object-fit">
      <HeroBanner />
      <div className=" px-6 mt-8">
        <div className="flex justify-center items-center h-full">
          Select Your Product.
        </div>
        <div className="flex justify-center items-center h-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          aliquid incidunt rem qui reiciendis dicta, molestias voluptas sequi
          nostrum placeat, laboriosam deleniti consectetur?.
        </div>
      </div>
    </div>
  );
};

export default ClothesCategory;
