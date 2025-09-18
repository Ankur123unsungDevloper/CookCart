/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// --- Section Data ---
const homeFeatures = [
  { title: "Browse Dishes", href: "/dishes", description: "Explore authentic home-made meals." },
  { title: "Our Moms & Chefs", href: "/chefs", description: "Meet the people cooking your food." },
  { title: "Track Orders", href: "/orders", description: "Track your food in real time." },
  { title: "Meal Calendar", href: "/calendar", description: "Plan your meals ahead of time." },
];

const aboutLinks = [
  { title: "About CookCart", href: "/about", description: "Our mission and story." },
  { title: "Why Home-Made?", href: "/why-homemade", description: "Why mom’s food is special." },
  { title: "Customer Stories", href: "/stories", description: "See what our customers say." },
  { title: "Our Promise", href: "/promise", description: "Fresh, hygienic and safe food guarantee." },
];

const menuCategories = [
  { title: "North Indian Thali", href: "/menu/north-indian", description: "Comfort classics from the north." },
  { title: "South Indian Meals", href: "/menu/south-indian", description: "Idli, Dosa, Sambar and more." },
  { title: "Continental & Fusion", href: "/menu/continental", description: "Pastas, wraps and international flavors." },
  { title: "Desserts & Sweets", href: "/menu/desserts", description: "Gulab Jamun, cakes and halwa." },
  { title: "Healthy Choices", href: "/menu/healthy", description: "Low-calorie and diet friendly meals." },
];

const chefLinks = [
  { title: "Top Rated Chefs", href: "/chefs/top-rated", description: "Our most loved cooks." },
  { title: "New Chefs", href: "/chefs/new", description: "Fresh talent joining CookCart." },
  { title: "Chefs Near You", href: "/chefs/local", description: "Find home chefs nearby." },
  { title: "Apply as a Chef", href: "/apply-chef", description: "Join CookCart as a home chef." },
];

export function NavigationMenuListItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {homeFeatures.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {aboutLinks.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {menuCategories.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Chefs */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Chefs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {chefLinks.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing */}
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// --- Reusable List Item ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
