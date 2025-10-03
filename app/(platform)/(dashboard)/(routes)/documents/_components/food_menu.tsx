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
        <div key={i} className="row">
          <div className="card card-left">
            <img src={`/experts/expert${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/experts/expert${2 * i}.jpg`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  }

  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <img src="/icons/india.png" alt="" />
          </div>
        </section>
        <section className="">
          <div className="main-content">
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
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
        <section className="footer">
          <Link href="#" className="footer-link">link in description</Link>
        </section>
      </ReactLenis>
    </>
  );
};

export default FoodMenu;