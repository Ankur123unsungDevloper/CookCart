import Image from "next/image";
import { MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import CopyRight from "./_components/copyright";
import { Logo } from "@/components/logo";
import Language from "./_components/language";

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          {/* Country + Language */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
              <MapPin size={16} />
              India
            </button>
            <Language />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-[#ff0157]">Who We Are</a></li>
              <li><a href="/blog" className="hover:text-[#ff0157]">Blog</a></li>
              <li><a href="/careers" className="hover:text-[#ff0157]">Work With Us</a></li>
              <li><a href="/report" className="hover:text-[#ff0157]">Report Fraud</a></li>
              <li><a href="/contact" className="hover:text-[#ff0157]">Contact</a></li>
            </ul>
          </div>

          {/* Zomaverse */}
          <div>
            <h3 className="font-semibold mb-3">Zomaverse</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/app" className="hover:text-[#ff0157]">Zomato App</a></li>
              <li><a href="/blinkit" className="hover:text-[#ff0157]">Blinkit</a></li>
              <li><a href="/feeding" className="hover:text-[#ff0157]">Feeding India</a></li>
              <li><a href="/hyperpure" className="hover:text-[#ff0157]">Hyperpure</a></li>
              <li><a href="/zomaland" className="hover:text-[#ff0157]">Zomaland</a></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="font-semibold mb-3">For Restaurants</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/partner" className="hover:text-[#ff0157]">Partner With Us</a></li>
              <li><a href="/apps" className="hover:text-[#ff0157]">Apps For You</a></li>
            </ul>
          </div>

          {/* Social + App Download */}
          <div>
            <h3 className="font-semibold mb-3">Social Links</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-[#ff0157]"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#ff0157]"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#ff0157]"><Instagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#ff0157]"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-[#ff0157]"><Youtube size={20} /></a>
            </div>
            <div className="flex flex-col gap-3">
              <Image src="/appstore.png" alt="App Store" width={140} height={40} />
              <Image src="/googleplay.png" alt="Google Play" width={140} height={40} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <CopyRight />
        </div>
      </div>
    </div>
  );
};

export default Footer;
