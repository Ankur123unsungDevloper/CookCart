import Experts from "./_components/experts";
import Heading from "./_components/heading";
import Hero from "./_components/hero";
import Heroine from "./_components/heroine";
import Menu from "./_components/menu";
import Testimonial from "./_components/testimonial";

const LandingPage = () => {
  return (
    <div>
      <Heading />
      <Hero />
      <Menu />
      <Experts />
      <Testimonial />
      <Heroine />
    </div>
  );
};

export default LandingPage;