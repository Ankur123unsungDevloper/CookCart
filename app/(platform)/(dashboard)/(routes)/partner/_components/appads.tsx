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
    // Smooth scroll animation for phone
    gsap.fromTo(
      ".app-phone-wrap",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".app-ads-section",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 5,
        },
      }
    );

    // Cards appear outward from phone
    gsap.fromTo(
      ".feature-card",
      {
        opacity: 0,
        scale: 0.2,
        y: 40,
        x: 0,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        ease: "back.out(1.8)",
        duration: 1.2,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".app-ads-section",
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <section
        style={{ background: "linear-gradient(0deg, #FFFFFF 0%, #FFEDEF 100%)" }}
        className="app-ads-section w-full py-20 flex flex-col items-center justify-center overflow-hidden"
      >  
        {/* Heading */}
        <div className="max-w-4xl text-center mb-16 px-4">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[#FF4F5A] mb-4">
            What’s waiting for you on the app?
          </h1>
          <h3 className="text-base sm:text-2xl md:text-3xl max-w-xl font-medium text-gray-500 text-center mx-auto">
            Our app is packed with features that enable you to experience food delivery like never before
          </h3>
        </div>

        {/* Feature Layout */}
        <div className="relative flex items-center justify-center gap-10 bottom-12">

          {/* Left 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 w-[300px] sm:w-[340px] relative bottom-10 right-15">
            {featuresLeft.map((feature, index) => {
              const offsets = [
                "-translate-y-6",
                "translate-y-6",
                "-translate-y-3",
                "translate-y-3"
              ];
              const offsetClass = offsets[index % offsets.length];

              return (
                <div
                  key={index}
                  className={`feature-card bg-white shadow-lg rounded-2xl p-6 w-[130px] h-[150px] flex flex-col items-center justify-center transition-transform hover:scale-105 transform ${offsetClass}`}
                >
                  <img src={feature.img} alt={feature.title} className="w-14 h-14 mb-3" />
                  <p className="text-gray-800 font-medium text-center">{feature.title}</p>
                </div>
              );
            })}
          </div>

          {/* Phone Center */}
          <div className="app-phone-wrap relative z-10 flex items-center justify-center w-[240px] sm:w-[340px] md:w-[280px]">
            <img src="/icons/phone.png" alt="App Phone" className="app-phone w-full object-contain drop-shadow-2xl" />

            {/* Mini scheduler card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-42 md:w-40 bg-white rounded-2xl shadow-xl flex flex-col items-center p-3">
              <div className="w-30 h-30 rounded-md bg-white flex items-center justify-center mb-2">
                <img src="/icons/calendar-small.png" alt="calendar" className="w-20 h-20" />
              </div>
              <div className="text-sm font-semibold text-gray-800 text-center relative bottom-5">
                Schedule your order
              </div>
            </div>
            <div className="absolute -bottom-14 left-0 h-[112px] w-full bg-[linear-gradient(0deg,_rgba(255,_255,_255,_100)_0%,_rgba(255,_255,_255,_50)_70%,_rgba(255,_255,_255,_0)_100%)]"></div>
          </div>

          {/* Right 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 w-[300px] sm:w-[340px] relative bottom-10 left-15">
            {featuresRight.map((feature, index) => {
              const offsets = [
                "translate-y-6",
                "-translate-y-6",
                "translate-y-3",
                "-translate-y-3"
              ];
              const offsetClass = offsets[index % offsets.length];

              return (
                <div
                  key={index}
                  className={`feature-card bg-white shadow-lg rounded-2xl p-6 w-[130px] h-[150px] flex flex-col items-center justify-center transition-transform hover:scale-105 transform ${offsetClass}`}
                >
                  <img src={feature.img} alt={feature.title} className="w-14 h-14 mb-3" />
                  <p className="text-gray-800 font-medium text-center">{feature.title}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </ReactLenis>
  );
};

export default AppAds;
