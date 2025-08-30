import Image from "next/image";

const experts = [
  { src: "/experts/expert1.jpg", name: "Anita Sharma" },
  { src: "/experts/expert2.jpg", name: "Sunita Verma" },
  { src: "/experts/expert3.jpg", name: "Meena Gupta" },
  { src: "/experts/expert4.jpg", name: "Kavita Singh" },
];

const Experts = () => {
  return (
    <div className="p-25">
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-[#111]">
          Our Kitchen&nbsp;
          <span className="text-red-500">E</span>xpert
        </h2>
        <h2 className="text-[2.5em] font-medium text-[#111] relative left-19 -mt-5 mb-4">
          Our&nbsp;
          <span className="text-red-500">M</span>om&apos;s
        </h2>
        <p className="font-medium text-[#555] mb-4 justify-center text-center">
          Meet the heart and soul behind our delicious, home-cooked meals. Our moms bring decades of culinary expertise, passion, and love to every dish they prepare. From traditional family recipes to innovative healthy options, they ensure that each meal is crafted with care and the finest ingredients. Get to know the amazing
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-6 mt-8 justify-between px-4">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6 w-[300px] transition hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-[200px] h-[200px] mb-4">
              <Image
                src={expert.src}
                alt={expert.name}
                fill
                className="rounded-full object-cover border-4 border-red-100"
                sizes="140px"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">{expert.name}</h4>
            <span className="text-sm text-gray-500 text-center mt-1">Home Chef</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;