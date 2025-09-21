import Image from "next/image";

const experts = [
  { circle: "/experts/expert1.jpg", img: "/experts/expert1.png", id:"img1", name: "Anita Sharma" },
  { circle: "/experts/expert2.jpg", img: "/experts/expert2.png", id:"img2", name: "Sunita Verma" },
  { circle: "/experts/expert3.jpg", img: "/experts/expert3.png", id:"img3", name: "Meena Gupta" },
  { circle: "/experts/expert4.jpg", img: "/experts/expert4.png", id:"img4", name: "Kavita Singh" },
];
;

const Experts = () => {
  return (
    <div className="p-25">
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-[2.5em] font-medium text-[#111]">
          Our Kitchen&nbsp;
          <span className="text-red-500 font-medium text-[1.5em]">E</span>xpert
        </h2>
        <h2 className="text-[2.5em] font-medium text-[#111] relative left-20 -mt-5 mb-4">
          Our&nbsp;
          <span className="text-red-500 font-medium text-[1.5em]">M</span>om&apos;s
        </h2>
        <p className="font-medium text-[#555] mb-4 justify-center text-center">
          Meet the heart and soul behind our delicious, home-cooked meals. Our moms bring decades of culinary expertise, passion, and love to every dish they prepare. From traditional family recipes to innovative healthy options, they ensure that each meal is crafted with care and the finest ingredients. Get to know the amazing
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-6 mt-8 justify-center px-4">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6 w-[300px] hover:shadow-lg inout"
          >
            <div className="person">
              <div className="container">
                <Image
                  src={expert.circle}
                  alt={`${expert.name} circle`}
                  width={300}
                  height={300}
                  className="circle"
                />
                <Image
                  src={expert.img}
                  alt={expert.name}
                  id={expert.id}
                  width={300}
                  height={300}
                  className="img"
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center mt-10">{expert.name}</h4>
            <span className="text-sm text-gray-500 text-center mt-1">Home Chef</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;