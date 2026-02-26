import Experts from "./_components/experts";
import Heading from "./_components/heading";
import Menu_Cards from "./_components/menu_cards";
import Hero from "./_components/hero";
import Heroine from "./_components/heroine";
import Menu from "./_components/menu";
import Testimonial from "./_components/testimonial";
import FoodMenu from "./_components/food_menu";
import AppAds from "./_components/appads";

const LandingPage = () => {
  return (
    <div>
      <Heading />
      <FoodMenu />
      <Hero />
      <Menu_Cards />
      <Menu />
      <AppAds />
      <Experts />
      <Testimonial />
      <Heroine />
    </div>
  );
};

export default LandingPage;