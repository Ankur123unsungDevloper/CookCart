const Heroine = () => {
  return (
    <div
      className="p-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg3.jpg')` }}
    >
      {/* Heading */}
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-[#111]">
          <span className="text-[#ff0157] font-medium text-[1.5em]">C</span>ontract Us
        </h2>
        <p className="font-medium text-[#111] mb-4 justify-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        </p>
      </div>

      {/* Form */}
      <div className="py-18.5 px-12.5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] max-w-[500px] mt-12.5 rounded-xl">
        <h3 className="text-[#111] text-[1.2em] mb-5 font-medium">
          Send Message
        </h3>

        {/* Floating Input: Name */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            required
            placeholder=""
            className="peer w-full p-[10px] border border-[rgba(38,38,38,0.25)] bg-white rounded-[5px] outline-none text-[#333] text-[1em] transition duration-500"
          />
          <span className="absolute left-0 p-[10px] pointer-events-none text-[1em] text-[rgba(38,38,38,0.25)] uppercase transition duration-500 peer-focus:text-[#ff0157] peer-valid:text-[#ff0157] peer-focus:translate-x-[10px] peer-focus:-translate-y-[7px] peer-focus:text-[0.65em] peer-focus:px-[10px] peer-focus:bg-white peer-focus:border-l peer-focus:border-r peer-focus:border-[#ff0157] peer-focus:tracking-[0.2em]peer-valid:translate-x-[10px] peer-valid:-translate-y-[7px] peer-valid:text-[0.65em] peer-valid:px-[10px] peer-valid:bg-white peer-valid:border-l peer-valid:border-r peer-valid:border-[#ff0157] peer-valid:tracking-[0.2em]">
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
          <span className="absolute left-0 p-[10px] pointer-events-none text-[1em] text-[rgba(38,38,38,0.25)] uppercase transition duration-500 peer-focus:translate-x-[10px]peer-focus:-translate-y-[7px] peer-focus:text-[0.65em] peer-focus:px-[10px] peer-focus:bg-[#ff0157] peer-focus:text-white peer-focus:rounded-[2px]      peer-valid:translate-x-[10px] peer-valid:-translate-y-[7px] peer-valid:text-[0.65em] peer-valid:px-[10px] peer-valid:bg-[#ff0157] peer-valid:text-white peer-valid:rounded-[2px]">
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

        {/* Submit */}
        <div className="relative w-full mb-5">
          <input
            type="submit"
            value="Send"
            className="w-full max-w-25 p-2.5 rounded text-white bg-[#ff0157] text-lg font-medium outline-none uppercase cursor-pointer tracking-[2px] transition duration-500 hover:bg-[#e6004c]"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroine;
