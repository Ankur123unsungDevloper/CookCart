/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const featuresLeft = [
  { img: "/icons/healthy.png", title: "Healthy" },
  { img: "/icons/veg.png", title: "Veg Mode" },
  { img: "/icons/party.png", title: "Plan a Party" },
  { img: "/icons/gift.png", title: "Gift Cards" },
];

const featuresRight = [
  { img: "/icons/gourmet.png", title: "Gourmet" },
  { img: "/icons/offers.png", title: "Offers" },
  { img: "/icons/train.png", title: "Food on Train" },
  { img: "/icons/collection.png", title: "Collections" },
];

const AppAds = () => {
  useEffect(() => {
    // Animate feature cards on scroll
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".app-ads-section",
          start: "top 80%",
        },
      }
    );

    // Animate phone
    gsap.fromTo(
      ".app-phone",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".app-ads-section",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <ReactLenis root>
      <section className="app-ads-section w-full py-20 bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center overflow-hidden">
        {/* Heading */}
        <div className="max-w-4xl text-center mb-16 px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#FF4F5A] mb-4">
            What’s waiting for you on the app?
          </h1>
          <h3 className="text-base sm:text-2xl md:text-3xl max-w-xl font-medium text-gray-500 text-center mx-auto">
            Our app is packed with features that enable you to experience food delivery like never before
          </h3>
        </div>

        {/* Feature Layout */}
        <div className="relative flex items-center justify-center gap-10">
          {/* Left 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 w-[300px] sm:w-[340px]">
            {featuresLeft.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white shadow-lg rounded-2xl p-6 w-[150px] h-[150px] flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-14 h-14 mb-3"
                />
                <p className="text-gray-800 font-medium text-center">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Phone Center */}
          <div className="relative z-10">
            <img
              src="/icons/phone.png"
              alt="App Phone"
              className="app-phone w-[240px] sm:w-[320px] md:w-[360px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 w-[300px] sm:w-[340px]">
            {featuresRight.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white shadow-lg rounded-2xl p-6 w-[150px] h-[150px] flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-14 h-14 mb-3"
                />
                <p className="text-gray-800 font-medium text-center">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default AppAds;
