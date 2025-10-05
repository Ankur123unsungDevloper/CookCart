/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactLenis} from "lenis/react";

const FoodMenu = () => {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div key={i} className="relative w-[100vw] my-[1em] mx-0 flex justify-center gap-[2em]">
          <div className="card card-left">
            <img className="w-full h-full object-cover" src={`/experts/expert${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img className="w-full h-full object-cover" src={`/experts/expert${2 * i}.jpg`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  }

  return (
    <>
      <ReactLenis root>
        <section className="relative w-full flex justify-center items-center h-[100vh]">
          <div className="img">
            <img className="w-1/2 h-full object-cover aspect-square" src="/icons/india.png" alt="" />
          </div>
        </section>
        <section className="relative w-[100vw] h-[150vh] flex flex-col justify-center items-center">
          <div className="main-content">
            <div className="logo">
              <img className="w-full h-full object-cover" src="/logo.png" alt="Logo" />
            </div>

            <div className="copy">
              <div className="line">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="btn">
              <button type="button">
                Get Started
              </button>
            </div>
          </div>

          {generateRows()}
        </section>
        <section className="relative w-full flex justify-center items-start h-[50vh]">
          <Link href="#" className="footer-link">link in description</Link>
        </section>
      </ReactLenis>
    </>
  );
};

export default FoodMenu;