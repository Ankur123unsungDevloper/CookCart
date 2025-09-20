import Image from "next/image";

const testimonial = [
  {
    src: "/testimonial/testi1.jpg",
    name: "Anita Sharma",
    experience:
      "CookCart made my daily meal planning so easy! The food tastes just like home and the service is always prompt.",
    color: "from-teal-500 to-teal-700",
  },
  {
    src: "/testimonial/testi2.jpg",
    name: "Sunil Verma",
    experience:
      "I love the variety and freshness. My kids enjoy every meal and I get more time for myself. Highly recommended!",
    color: "from-pink-500 to-pink-700",
  },
  {
    src: "/testimonial/testi3.jpg",
    name: "Meena Gupta",
    experience:
      "The chefs are amazing and the menu is perfect for busy families. CookCart truly brings comfort food to our table.",
    color: "from-sky-500 to-sky-700",
  },
];

const Testimonial = () => {
  return (
    <div
      className="p-20 bg-cover bg-center bg-no-repeat h-200"
      style={{ backgroundImage: `url('/backgroundImage/bg2.jpg')` }}
    >
      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-[2.5em] font-medium text-white">
          They&nbsp;
          <span className="text-red-500 font-bold text-[1.5em]">S</span>aid
          About Us
        </h2>
        <p className="font-medium text-white mt-2">
          Our customers love us! Read what they have to say below.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-25">
        {testimonial.map((testi, idx) => (
          <div
            key={idx}
            className="relative w-[340px] h-[300px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 hover:h-[400px] group overflow-visible"
          >
            {/* Image Box */}
            <div
              className="absolute top-6 w-[280px] h-[200px] rounded-xl overflow-hidden transition-all duration-500 group-hover:-top-24 group-hover:scale-90 shadow-xl z-20"
            >
              <Image
                src={testi.src}
                alt={testi.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="absolute top-[240px] w-full px-6 text-center transition-all duration-500 group-hover:top-[180px] z-10"
            >
              <h3
                className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${testi.color}`}
              >
                {testi.name}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {testi.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
