import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";

const SocialLinks = () => {
  return (
    <div className="relative right-5">
      <h3 className="font-semibold mb-3">Social Links</h3>
      <div className="flex gap-4 mb-4">
        <a href="#" className="text-gray-600 hover:text-[#1877F2]">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-[#000000]">
          <FaXTwitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-[#ff0157]">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-[#0A66C2]">
          <CiLinkedin size={22} />
        </a>
        <a href="#" className="text-gray-600 hover:text-[#ff0101]">
          <IoLogoYoutube size={22} />
        </a>
      </div>
      <div className="flex flex-col items-start gap-y-18 relative w-50 h-30 top-10">
        <Button variant="ghost" className="p-0 w-50 h-0 relative">
          <Image 
            src="/icons/appstore.png" 
            alt="App Store" 
            width={205}
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
    
  );
};

export default SocialLinks;