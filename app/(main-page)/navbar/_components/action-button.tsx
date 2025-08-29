"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import DropdownMenu from "./drop-down-menu";

const ActionButton = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex">
          <Button
            size="sm"
            className="hidden lg:flex text-center items-center justify-center h-[30px] w-[130px] p-4 bg-[#ff1a1a] hover:bg-[#e60026]"
            asChild
          >
            <Link
              href="/sign-up"
              className="text-sm font-semibold"
            >
              Get CookCart free
            </Link>
          </Button>
      </div>
      
      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="rounded-full xl:hidden"
        >
          <X className="h-6 w-6 items-center justify-center" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="flex lg:hidden"
        >
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}
      {isDropdownVisible &&
        <DropdownMenu onClose={closeDropdown} />
      }
    </div>
  );
}

export default ActionButton;