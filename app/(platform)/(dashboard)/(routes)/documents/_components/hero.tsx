"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

const Hero = () => {
  return (
    <ReactLenis root>
      <section className="main relative w-screen flex flex-col justify-center items-center bg-white text-black">
        <div className="main-content max-w-4xl w-full space-y-6 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-7xl font-extrabold pb-2">Better food for more people</h3>
          <p></p>
        </div>
      </section>
      <section className="footer">
        <div></div>
      </section>
    </ReactLenis>
  );
};

export default Hero;