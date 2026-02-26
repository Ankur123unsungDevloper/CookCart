/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Download = () => {
  useEffect(() => {
    // Phone scroll-up animation (same as AppAds)
    gsap.fromTo(
      ".download-phone-wrap",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".download-section",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 5,
        },
      }
    );

    // QR smooth fade-in AFTER phone
    gsap.fromTo(
      ".qr-box",
      { opacity: 0, scale: 0.7, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "back.out(1.6)",
        duration: 1.2,
        scrollTrigger: {
          trigger: ".download-section",
          start: "top 45%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="download-section w-[88%] mx-auto mb-16 flex justify-center items-center py-10 bg-white">
      {/* Outer rounded container */}
      <div className="w-[1500px] h-135 max-w-[1500px] rounded-3xl border-2 border-[#ffccd2] bg-gradient-to-t from-[#fff5f6] to-white py-10 md:p-20 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">

        {/* Background curve lines */}
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none opacity-40">
          <img
            src="/backgroundImage/download-curves.png"
            alt="background curve lines"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="flex-1 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Download the app now!
          </h2>

          <p className="text-gray-600 text-lg md:text-2xl mb-8">
            Experience seamless online ordering only on the CookCart app
          </p>

          {/* Store buttons */}
          <div className="flex gap-4">
            <Link href="/sign-up" className="transition-transform duration-300 hover:scale-110">
              <Image
                src="/icons/appstore.png"
                alt="App Store"
                width={180}
                height={80}
                className="cursor-pointer"
              />
            </Link>

            <Link href="/contact-sales" className="transition-transform duration-300 hover:scale-110">
              <Image
                src="/icons/playstore.png"
                alt="Play Store"
                width={180}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT PHONE */}
        <div className="flex-1 flex justify-center relative z-10">
          <div className="relative top-10 w-[850px] md:w-[454px] download-phone-wrap">
            <img
              src="/icons/phone.png"
              alt="Phone Preview"
              className="w-full object-contain drop-shadow-2xl"
            />

            {/* QR Code Box */}
            <div className="qr-box absolute top-[18%] left-1/2 -translate-x-1/2 p-4 text-center w-[70%]">
              <p className="text-gray-700 text-2xl font-semibold mb-2">
                Scan the QR code to download the app
              </p>
              <img
                src="/icons/qr.png"
                alt="QR Code"
                className="w-80 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
