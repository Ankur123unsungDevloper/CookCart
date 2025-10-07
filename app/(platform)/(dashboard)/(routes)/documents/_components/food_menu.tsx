/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const FoodMenu = () => {
  useEffect(() => {
    const ScrollTriggerSettings = {
      trigger: ".main-section",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotateValues = [-30, -20, -35];
    const rightRotateValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    // Animate rows
    gsap.utils.toArray(".menu-row").forEach((row, index) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main-section",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotateValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotateValues[index]
            }deg)`;
          },
        },
      });
    });

    // Logo Animation
    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    // Text Animation
    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    // Button Animation
    gsap.to(".cta-btn", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Generate menu rows
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div
          key={i}
          className="menu-row relative w-screen my-8 flex justify-center gap-8"
        >
          <div className="card-left relative w-[40%] h-[360px] sm:w-[50%] sm:h-[240px] rounded-xl overflow-hidden will-change-transform">
            <img
              src={`/foodmenu/food${2 * i - 1}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card-right relative w-[40%] h-[360px] sm:w-[50%] sm:h-[240px] rounded-xl overflow-hidden will-change-transform">
            <img
              src={`/foodmenu/food${2 * i}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <ReactLenis root>
      {/* MAIN SECTION */}
      <section className="main-section relative w-screen h-[150vh] flex flex-col justify-center items-center bg-[#111] text-white">
        {/* Floating Logo and Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="logo w-[150px] h-[150px] border-2 border-white rounded-full overflow-hidden scale-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="line my-8 flex flex-col justify-center items-center">
            {["Delicious Meals", "Made with Love", "Just for You"].map(
              (text, i) => (
                <div key={i} className="relative my-2 h-[28px] w-max overflow-hidden">
                  <p className="text-[24px] translate-y-[30px]">{text}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Animated Rows */}
        {generateRows()}
      </section>
    </ReactLenis>
  );
};

export default FoodMenu;
