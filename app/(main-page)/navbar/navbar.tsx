"use client";

import { Logo } from "@/components/logo";
import { useScrollTop } from "@/hooks/use-Scroll-Top";
import { cn } from "@/lib/utils";

import { NavigationMenuListItems } from "./_components/menu";
import ActionButton from "./_components/action-button";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-10000 w-full py-1 px-2 flex flex-row justify-between items-center transition duration-500 bg-transparent",
        scrolled && "shadow-4xl backdrop-blur-2xl"
      )}
    >
      <Logo />
      <div className="flex items-center justify-center gap-x-5">
        <NavigationMenuListItems />
        <div className="hidden lg:flex items-center">
          <div className="w-px h-5 mx-4 bg-gray-200" />
        </div>
        <div className="md:ml-auto md:justify-end justify-between w-full items-center gap-x-1 relative left-1.5">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;