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
        "z-50 bg-transparent top-0 flex flex-row items-center justify-between w-full px-2 gap-x-8",
        scrolled && "border-b shadow-2xl bg-white"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-4">
        <NavigationMenuListItems />
        <div className="md:ml-auto md:justify-end justify-end w-full items-center gap-x-2 relative left-[5px]">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;