import SocialLinks from "./social-links";

const DownMenu = () => {
  return (
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
        <h3 className="font-semibold mb-3">CookCart</h3>
        <ul className="space-y-2 text-sm text-gray-600">
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
        <ul className="space-y-2 text-sm text-gray-600">
          <li><a href="/partner" className="hover:text-[#ff0157]">Partner With Us</a></li>
          <li><a href="/apps" className="hover:text-[#ff0157]">Apps For You</a></li>
        </ul>
      </div>

      {/* Social + App Download */}
      <SocialLinks />
    </div>
  );
};

export default DownMenu;