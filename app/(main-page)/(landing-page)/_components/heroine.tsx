const Heroine = () => {
  return (
    <div
      className="p-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg3.jpg')` }}
    >
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-[#111]">
          <span className="text-red-500 font-medium text-[1.5em]">C</span>ontract Us
        </h2>
        <p className="font-medium text-[#111] mb-4 justify-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        </p>
      </div>
      <div className="py-18.5 px-12.5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] max-w-[500px] mt-12.5">
        <h3 className="text-[#111] text-[1.2em] mb-5 font-medium">
          Send Message
        </h3>
        <div className="relative w-full mb-5">
          <input type="text" placeholder="Name" className="w-full p-2.5 border border-[#555] rounded text-[#111] text-lg font-light outline-none" />
        </div>
        <div className="relative w-full mb-5">
          <input type="text" placeholder="Email" className="w-full p-2.5 border border-[#555] rounded text-[#111] text-lg font-light outline-none" />
        </div>
        <div className="relative w-full mb-5">
          <textarea placeholder="Message" className="w-full p-2.5 border border-[#555] rounded text-[#111] text-lg font-light outline-none resize-none"></textarea>
        </div>
        <div className="relative w-full mb-5">
          <input type="submit" value="Send" className="w-full max-w-25 p-2.5 border-none rounded text-white bg-[#ff0157] text-lg font-medium outline-none uppercase cursor-pointer tracking-[2px] transition duration-[0.5s]" />
        </div>
      </div>
    </div>
  );
};

export default Heroine;