import LandingPage from "./(landing-page)/page";
import Navbar from "./navbar/navbar";

const MainPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default MainPage;