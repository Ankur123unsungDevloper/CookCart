"use client";

import MenuFoodIems from "@/components/menu-food-items";

const Menu = () => {
  return (
    <div className="py-25">
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2em] font-medium text-[#111]">
          Our
          <span className="text-red-500 font-medium text-[1.5em]">
            M
          </span>
          enu
        </h2>
        <p className="font-medium text-[#555] mb-4">
          Pick what you love ❤️
        </p>
      </div>
      <div className="py-10">
        <MenuFoodIems />
      </div>
    </div>
  );
};

export default Menu;