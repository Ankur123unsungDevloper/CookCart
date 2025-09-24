"use client";

import { useEffect } from "react";

const Heroine = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".pixel-btn");
    buttons.forEach((button) => {
      const pixelContainer = button.querySelector(".pixel-container");
      if (!pixelContainer) return;

      const pixelSize = 10; // Size of each pixel
      const btnWidth = button.offsetWidth;
      const btnHeight = button.offsetHeight;
      const cols = Math.ceil(btnWidth / pixelSize);
      const rows = Math.ceil(btnHeight / pixelSize);

      // prevent duplicate pixels on re-render
      if (pixelContainer.childElementCount === 0) {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.left = `${col * pixelSize}px`;
            pixel.style.top = `${row * pixelSize}px`;
            const delay = Math.random() * 1;
            pixel.style.transitionDelay = `${delay}s`;
            pixelContainer.appendChild(pixel);
          }
        }
      }
    });
  }, []);

  return (
    <div
      className="p-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg3.jpg')` }}
    >
      {/* Heading */}
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-[#111]">
          <span className="text-[#ff0157] font-medium text-[1.5em]">C</span>
          ontract Us
        </h2>
        <p className="font-medium text-[#111] mb-4 text-center">
          We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below.
        </p>
      </div>

      {/* Form */}
      <div className="py-10 px-8 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] max-w-[500px] mt-12 rounded-xl">
        <h3 className="text-[#111] text-[1.2em] mb-5 font-medium">
          Send Message
        </h3>

        {/* Floating Input: Username */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            required
            placeholder=""
            className="peer w-full p-[10px] border border-[rgba(38,38,38,0.25)] bg-white rounded-[5px] outline-none text-[#333] text-[1em] transition duration-500"
          />
          <span
            className="absolute left-2 top-2 pointer-events-none text-[1em] text-[rgba(38,38,38,0.25)] uppercase 
            transition duration-500 peer-focus:text-[#ff0157] peer-valid:text-[#ff0157] 
            peer-focus:-translate-y-4 peer-valid:-translate-y-4 peer-focus:text-[0.75em] peer-valid:text-[0.75em] 
            peer-focus:px-1 peer-valid:px-1 peer-focus:bg-white peer-valid:bg-white 
            peer-focus:border-l peer-focus:border-r peer-focus:border-[#ff0157] 
            peer-valid:border-l peer-valid:border-r peer-valid:border-[#ff0157] whitespace-nowrap inline-block"
          >
            Username
          </span>
        </div>

        {/* Floating Input: Email */}
        <div className="relative w-full mb-5">
          <input
            type="email"
            required
            placeholder=""
            className="peer w-full p-[10px] border border-[rgba(38,38,38,0.25)] bg-white rounded-[5px] outline-none text-[#333] text-[1em] transition duration-500"
          />
          <span
            className="absolute left-2 top-2 pointer-events-none text-[1em] text-[rgba(38,38,38,0.25)] uppercase 
            transition duration-500 peer-focus:text-white peer-valid:text-white 
            peer-focus:bg-[#ff0157] peer-valid:bg-[#ff0157] 
            peer-focus:-translate-y-4 peer-valid:-translate-y-4 peer-focus:text-[0.75em] peer-valid:text-[0.75em] 
            peer-focus:px-2 peer-valid:px-2 peer-focus:rounded-sm peer-valid:rounded-sm whitespace-nowrap inline-block"
          >
            Email
          </span>
        </div>

        {/* Message */}
        <div className="relative w-full mb-5">
          <textarea
            placeholder="Message"
            className="w-full p-2.5 border border-gray-400 rounded text-[#111] text-lg font-light outline-none resize-none"
          ></textarea>
        </div>

        {/* Pixel Button Submit */}
        <div className="relative w-full mb-5 flex justify-start">
          <div className="pixel-btn">
            <span>Send</span>
            <div className="pixel-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroine;
