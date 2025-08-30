import Image from "next/image";

const testimonial = [
  {
    src: "/testimonial/testi1.jpg",
    name: "Anita Sharma",
    experience:
      "CookCart made my daily meal planning so easy! The food tastes just like home and the service is always prompt.",
  },
  {
    src: "/testimonial/testi2.jpg",
    name: "Sunil Verma",
    experience:
      "I love the variety and freshness. My kids enjoy every meal and I get more time for myself. Highly recommended!",
  },
  {
    src: "/testimonial/testi3.jpg",
    name: "Meena Gupta",
    experience:
      "The chefs are amazing and the menu is perfect for busy families. CookCart truly brings comfort food to our table.",
  },
];

const Testimonial = () => {
  return (
    <div
      className="p-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg2.jpg')` }}
    >
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-white">
          They&nbsp;
          <span className="text-red-500 font-medium text-[1.5em]">S</span>aid
          About Us
        </h2>
        <p className="font-medium text-white mb-4 justify-center text-center">
          Our customers love us! Read what they have to say below.
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-6 mt-8 justify-between px-4">
        {testimonial.map((testi, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6 w-[340px] transition hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-[80px] h-[80px] mb-4">
              <Image
                src={testi.src}
                alt={testi.name}
                fill
                className="rounded-full object-cover border-4 border-blue-100"
                sizes="140px"
              />
            </div>
            <span className="text-sm text-gray-500 text-center mt-1 italic">{testi.experience}</span>
            <h4 className="text-lg font-semibold text-red-400 text-center">{testi.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;