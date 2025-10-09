/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

const Hero = () => {
  return (
    <ReactLenis root>
      <section className="main relative w-screen h-screen flex flex-col justify-center items-center bg-white text-black">
        <div className="main-content max-w-2xl w-full space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl text-red-500 font-extrabold pb-2">
            Better food for
            more people
          </h1>
          <h3 className="text-base sm:text-2xl md:text-3xl max-w-xl font-medium text-gray-500 text-center mx-auto flex justify-center items-center">
            For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep
          </h3>
        </div>
      </section>
      <section className="footer w-full h-30 flex justify-center items-center py-4 bg-white shadow-md rounded-3xl max-w-5xl mx-auto mt-10 relative bottom-40">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200 px-6">
          
          {/* Restaurants */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-4 gap-20">
            <div className="flex flex-col items-start justify-start sm:items-start text-left">
              <h2 className="text-4xl font-bold text-gray-600">3,00,000+</h2>
              <p className="text-gray-400 text-xl">restaurants</p>
            </div>
            <img src="/icons/restaurant.png" alt="Restaurant Icon" className="w-16 h-16 sm:ml-4 relative right-8" />
          </div>

          {/* Cities */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap-10">
            <div className="flex flex-col items-start sm:items-start text-left">
              <h2 className="text-4xl font-bold text-gray-600">800+</h2>
              <p className="text-gray-400 text-xl">cities</p>
            </div>
            <img src="/icons/location.png" alt="Location Icon" className="w-16 h-16 sm:ml-4" />
          </div>

          {/* Orders Delivered */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-4 gap-20">
            <div className="flex flex-col items-start sm:items-start text-left">
              <h2 className="text-4xl font-bold text-gray-600">3 billion+</h2>
              <p className="text-gray-400 text-xl">orders delivered</p>
            </div>
            <img src="/icons/order.png" alt="Order Icon" className="w-16 h-16 sm:ml-4" />
          </div>

        </div>
      </section>
    </ReactLenis>
  );
};

export default Hero;