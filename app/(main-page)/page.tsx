import Footer from "./(landing-page)/_components/footer";
import LandingPage from "./(landing-page)/page";
import Navbar from "./navbar/navbar";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default MainPage;