/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Menu_Cards = () => {
  // 🟢 1. SCROLL IMAGE ANIMATION
  useEffect(() => {
    const ScrollTriggerSettings = {
      trigger: ".hero-section",
      start: "top 30%",
      end: "bottom 60%",
      scrub: true,
    };

    const directions = [
      { x: -400, y: 0 }, // from left
      { x: 400, y: 0 }, // from right
      { x: -400, y: 50 }, // from left (lower)
      { x: 400, y: -50 }, // from right (upper)
    ];

    gsap.utils.toArray<HTMLImageElement>(".food-img").forEach((img, i) => {
      gsap.fromTo(
        img,
        {
          x: directions[i].x,
          y: directions[i].y,
          opacity: 0,
          rotate: i % 2 === 0 ? -10 : 10,
          scale: 0.7,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            ...ScrollTriggerSettings,
            onUpdate: (self) => {
              const p = self.progress;
              img.style.transform = `translate(${directions[i].x * (1 - p)}px, ${
                directions[i].y * (1 - p)
              }px) scale(${0.7 + 0.3 * p}) rotate(${(i % 2 === 0 ? -10 : 10) * (1 - p)}deg)`;
              img.style.opacity = `${p}`;
            },
          },
        }
      );
    });

    // Floating motion after they appear
    gsap.to(".food-img", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
      delay: 1.5,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // 🟡 2. COUNTING NUMBERS ANIMATION (Footer)
  useEffect(() => {
    const counters = gsap.utils.toArray<HTMLElement>(".count");

    counters.forEach((counter) => {
      const targetAttr = counter.getAttribute("data-target");
      const isBillion = counter.getAttribute("data-unit") === "billion";

      if (!targetAttr) return;
      const target = parseInt(targetAttr, 10);

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 3,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
          onUpdate: function () {
            const current = Math.floor(
              Number((this.targets()[0] as HTMLElement).innerText)
            );
            if (isBillion) {
              counter.innerText = `${current} billion+`;
            } else {
              counter.innerText = `${current.toLocaleString()}+`;
            }
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <ReactLenis root>
      <section className="hero-section relative w-screen h-screen flex flex-col justify-center items-center bg-white text-black overflow-hidden">
        {/* Text Section */}
        <div className="z-20 text-center max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-7xl text-red-500 font-extrabold pb-2">
            Better food for more people
          </h1>
          <h3 className="text-base sm:text-2xl md:text-3xl max-w-xl font-medium text-gray-500 text-center mx-auto">
            For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep
          </h3>
        </div>

        {/* Animated Images */}
        <div className="absolute inset-0 z-10">
          {/* Left Side */}
          <img
            src="/foodmenu/food1.png"
            alt="Food 1"
            className="food-img absolute w-32 h-32 top-[35%] left-50 -translate-y-1/2"
          />
          <img
            src="/foodmenu/food3.png"
            alt="Food 3"
            className="food-img absolute w-32 h-32 bottom-[25%] left-80"
          />

          {/* Right Side */}
          <img
            src="/foodmenu/food2.png"
            alt="Food 2"
            className="food-img absolute w-32 h-32 top-[30%] right-50"
          />
          <img
            src="/foodmenu/food4.png"
            alt="Food 4"
            className="food-img absolute w-32 h-32 bottom-[20%] right-80"
          />
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer w-full flex justify-center items-center py-6 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.1)] rounded-3xl max-w-5xl mx-auto mt-10 relative bottom-40">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200 px-6">
          
          {/* Restaurants */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-4 gap-10">
            <div className="flex flex-col items-start sm:items-start text-left">
              <h2 className="count text-4xl font-bold text-gray-600" data-target="300000">0</h2>
              <p className="text-gray-400 text-xl">restaurants</p>
            </div>
            <img src="/icons/restaurant.png" alt="Restaurant Icon" className="w-16 h-16 sm:ml-4" />
          </div>

          {/* Cities */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap-10">
            <div className="flex flex-col items-start sm:items-start text-left">
              <h2 className="count text-4xl font-bold text-gray-600" data-target="800">0</h2>
              <p className="text-gray-400 text-xl">cities</p>
            </div>
            <img src="/icons/location.png" alt="Location Icon" className="w-16 h-16 sm:ml-4" />
          </div>

          {/* Orders Delivered */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-4 gap-10">
            <div className="flex flex-col items-start sm:items-start text-left">
              <h2 className="count text-4xl font-bold text-gray-600" data-target="3" data-unit="billion">0</h2>
              <p className="text-gray-400 text-xl">orders delivered</p>
            </div>
            <img src="/icons/order.png" alt="Order Icon" className="w-16 h-16 sm:ml-4" />
          </div>

        </div>
      </section>
    </ReactLenis>
  );
};

export default Menu_Cards;
