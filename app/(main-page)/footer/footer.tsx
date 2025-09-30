import Image from "next/image";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";
import { Logo } from "@/components/logo";
import Language from "./_components/language";
import Country from "./_components/country";
import CopyRight from "./_components/copyright";
import { Button } from "@/components/ui/button";

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
            <Country />
            <Language />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <a href="#" className="text-gray-600 hover:text-[#010eff]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#000000]">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ff0157]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0109ff]">
                <CiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ff0101]">
                <IoLogoYoutube size={20} />
              </a>
            </div>
            <div className="flex flex-col items-start gap-y-18 relative w-50 h-30 top-10">
              <Button variant="ghost" className="p-0 w-50 h-0 relative">
                <Image 
                  src="/icons/appstore.png" 
                  alt="App Store" 
                  width={200}
                  height={40} 
                  className="w-full h-auto"
                />
              </Button>

              <Button variant="ghost" className="p-0 w-50 h-0 relative">
                <Image 
                  src="/icons/playstore.png" 
                  alt="Google Play" 
                  width={200} 
                  height={40} 
                  className="w-full h-auto"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10">
          <CopyRight />
        </div>
      </div>
    </div>
  );
};

export default Footer;
