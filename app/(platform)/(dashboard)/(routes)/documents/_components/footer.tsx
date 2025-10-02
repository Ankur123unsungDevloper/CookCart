import { Logo } from "@/components/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import {
  IoLogoYoutube,
  IoGlobeOutline
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-black border-t border-gray-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          {/* Country + Language */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 border border-gray-500 rounded-lg px-3 py-2 text-sm hover:bg-gray-900">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-lg">
                  <Image
                    src="/icons/india.png"
                    alt="India Flag"
                    width={30}
                    height={30}
                    className="rounded-sm"
                  />
                  India
                  <IoIosArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Image
                      src="/icons/india.png"
                      alt="India Flag"
                      width={30}
                      height={30}
                      className="rounded-sm"
                    />
                    India
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Image
                      src="/icons/united-arab-emirates.png"
                      alt="IAE Flag"
                      width={30}
                      height={30}
                      className="rounded-sm"
                    />
                    UAE
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2 border border-gray-500 rounded-lg px-3 py-2 text-sm hover:bg-gray-900">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-lg">
                  <IoGlobeOutline className="h-6 w-6" />
                  English
                  <IoIosArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>English</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-[#ff0157]">Who We Are</a></li>
              <li><a href="/blog" className="hover:text-[#ff0157]">Blog</a></li>
              <li><a href="/careers" className="hover:text-[#ff0157]">Work With Us</a></li>
              <li><a href="/report" className="hover:text-[#ff0157]">Report Fraud</a></li>
              <li><a href="/contact" className="hover:text-[#ff0157]">Contact</a></li>
            </ul>
          </div>

          {/* Cookcartverce */}
          <div>
            <h3 className="font-semibold mb-3">CookCart</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/app" className="hover:text-[#ff0157]">CookCart App</a></li>
              <li><a href="/moms" className="hover:text-[#ff0157]">Moms Community</a></li>
              <li><a href="/delivery" className="hover:text-[#ff0157]">Delivery Partners</a></li>
              <li><a href="/kitchens" className="hover:text-[#ff0157]">Popular Kitchens</a></li>
              <li><a href="/events" className="hover:text-[#ff0157]">CookCart Events</a></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="font-semibold mb-3">For Restaurants</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/partner" className="hover:text-[#ff0157]">Partner With Us</a></li>
              <li><a href="/apps" className="hover:text-[#ff0157]">Apps For You</a></li>
            </ul>
          </div>

          {/* Social + App Download */}
          <div className="relative right-5">
            <h3 className="font-semibold mb-3">Social Links</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-[#1877F2]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#000000]">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ff0157]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#0A66C2]">
                <CiLinkedin size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ff0101]">
                <IoLogoYoutube size={22} />
              </a>
            </div>
            <div className="flex flex-col items-start relative w-50 h-30">
              {/* App Store Button */}
              <Link href="/sign-up" className="transition-transform duration-300 hover:scale-110">
                <Image
                  src="/icons/appstore.png"
                  alt="App Store"
                  width={180}
                  height={60}
                  className="cursor-pointer"
                />
              </Link>

              {/* Play Store Button */}
              <Link href="/contact-sales" className="transition-transform duration-300 hover:scale-110">
                <Image
                  src="/icons/playstore.png"
                  alt="Play Store"
                  width={180}
                  height={60}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10">
          <div className="py-2 px-10 text-center">
            <p className="text-white">
              Copyright &copy; {new Date().getFullYear()}&nbsp;
              <Link href="" className="text-[#ff0157] font-medium no-underline">CookCart</Link>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;