/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const FoodMenu = () => {
  useEffect(() => {
    const ScrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotateValues = [-30, -20, -35];
    const rightRotateValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = (row).querySelector(".card-left");
      const cardRight = (row).querySelector(".card-right");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${leftXValues[index] * progress

              }px) translateY(${yValues[index] * progress}px) rotate(${leftRotateValues[index] * progress}deg)`;
            
            cardRight.style.transform = `translateX(${leftXValues[index] * progress

              }px) translateY(${yValues[index] * progress}px) rotate(${leftRotateValues[index] * progress}deg)`;
          }
        }
      })
    });
  }, [])

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div
          key={i}
          className="relative w-screen my-4 flex justify-center gap-8"
        >
          <div className="relative w-[40%] h-[360px] sm:w-[50%] sm:h-[240px] rounded-xl overflow-hidden will-change-transform">
            <img
              src={`/experts/expert${2 * i - 1}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-[40%] h-[360px] sm:w-[50%] sm:h-[240px] rounded-xl overflow-hidden will-change-transform">
            <img
              src={`/experts/expert${2 * i}.jpg`}
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
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex justify-center items-center">
        <div className="w-1/2 aspect-square">
          <img
            src="/icons/india.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="relative w-screen h-[150vh] flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-[150px] h-[150px] border-2 border-white rounded-full overflow-hidden scale-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="my-8 flex flex-col justify-center items-center">
            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map((text, i) => (
              <div key={i} className="relative my-2 h-[28px] w-max overflow-hidden">
                <p className="text-[24px] translate-y-[30px] text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div>
            <button className="relative px-8 py-4 text-lg text-white border-2 border-white rounded-full bg-transparent outline-none translate-y-[30px] opacity-0">
              Get Started
            </button>
          </div>
        </div>

        {generateRows()}
      </section>

      {/* FOOTER SECTION */}
      <section className="relative w-full h-[50vh] flex justify-center items-start">
        <Link
          href="#"
          className="text-[4vw] text-white hover:text-gray-300 transition-all"
        >
          link in description
        </Link>
      </section>
    </ReactLenis>
  );
};

export default FoodMenu;