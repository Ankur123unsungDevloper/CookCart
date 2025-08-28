"use client";

import { Logo } from "@/components/logo";
import { useScrollTop } from "@/hooks/use-Scrool-Top";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-transparent top-0 flex items-center justify-center w-full px-1 gap-x-8",
      scrolled && "border-b shadow-2xl bg-[#ffff]"
    )}>
      <Logo />
    </div>
  );
};

export default Navbar;