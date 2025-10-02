import { Logo } from "@/components/logo";
import Language from "./_components/language";
import Country from "./_components/country";
import CopyRight from "./_components/copyright";
import DownMenu from "./_components/down-menu";

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
        <DownMenu />

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10">
          <CopyRight />
        </div>
      </div>
    </div>
  );
};

export default Footer;
