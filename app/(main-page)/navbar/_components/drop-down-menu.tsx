"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DropdownMenuProps {
  onClose: () => void;
}

const DropdownMenu = ({
  onClose
}: DropdownMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden mt-10">
      <Accordion defaultValue="item-1" className="pl-2" type="single" collapsible>
        {/* Product Section */}
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger>
            Product
          </AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link href="/menu" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Browse Menu</div>
            </Link>
            <Link href="/chefs" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Our Chefs</div>
            </Link>
            <Link href="/moms-kitchen" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Mom’s Kitchen</div>
            </Link>
            <Link href="/calendar" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Meal Calendar</div>
            </Link>
            <Link href="/stories" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Customer Stories</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* Download Section → About */}
        <AccordionItem className="mt-6 border-b" value="item-2">
          <AccordionTrigger>About</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href="/about" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>About CookCart</div>
            </Link>
            <Link href="/why-homemade" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Why Homemade?</div>
            </Link>
            <Link href="/promise" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Our Promise</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* Menu Section */}
        <AccordionItem className="mt-6 border-b" value="item-3">
          <AccordionTrigger>Menu</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href="/menu/north-indian" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>North Indian Thali</div>
            </Link>
            <Link href="/menu/south-indian" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>South Indian Meals</div>
            </Link>
            <Link href="/menu/desserts" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Desserts & Sweets</div>
            </Link>
            <Link href="/menu/healthy" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Healthy Choices</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* Chefs Section */}
        <AccordionItem className="mt-6 border-b" value="item-4">
          <AccordionTrigger>Chefs</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href="/chefs/top" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Top Rated Chefs</div>
            </Link>
            <Link href="/chefs/new" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>New Chefs</div>
            </Link>
            <Link href="/chefs/nearby" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Chefs Near You</div>
            </Link>
            <Link href="/chefs/apply" className="flex" onClick={handleLinkClick}>
              <div>
              </div>
              <div>Become a Chef</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* Pricing */}
        <Link
          href="/pricing"
          className="flex flex-1 items-center justify-between py-6 border-b text-xl"
        >
          Pricing
        </Link>
      </Accordion>

      {/* Bottom Buttons */}
      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          <Button className="w-full text-xl">Add Mom&apos;s Kitchen</Button>
        </div>
        <div className="space-y-4 flex flex-col px-4 mt-4">
          <Button variant="outline" className="w-full text-xl">
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
