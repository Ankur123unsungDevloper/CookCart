import CopyRight from "./_components/copyright";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-[rgba(0,0,0,0.1)] mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Navigation */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <a href="/about" className="hover:text-[#ff0157]">About Us</a>
          <a href="/contact" className="hover:text-[#ff0157]">Contact</a>
          <a href="/privacy-policy" className="hover:text-[#ff0157]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#ff0157]">Terms & Conditions</a>
        </div>
        {/* Copyright */}
        <CopyRight />
      </div>
    </div>
  );
};

export default Footer;
