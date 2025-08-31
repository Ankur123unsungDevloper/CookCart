import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-25">
      <div className="w-full flex flex-col lg:flex-row justify-between relative gap-8">
        <div className="w-full lg:w-[48%]">
          <h2 className="text-[2em] font-medium mb-4 text-[#111]">
            <span className="text-red-500 font-medium text-[1.5em]">
              A
            </span>
            bout Us
          </h2>
          <p className="font-medium text-[#555]">
            Ever felt the struggle of choosing between fast food convenience and a home-cooked healthy meal? You’re not alone. Students living away from home, working professionals with busy schedules, and even families often face the daily challenge of finding food that is not just tasty but also wholesome.
            <br/><br />
            That’s where <span className="font-bold text-xl">CookCart</span> steps in. We bridge the gap between kitchens that love to cook and people who long for nutritious, home-style meals. No complicated choices, no hidden compromises—just simple, freshly made food crafted with care and delivered straight to your doorstep.
            <br/><br />
            Our mission is to make healthy eating accessible for everyone while supporting local chefs and home cooks. Because we believe food isn’t just about filling your stomach—it’s about feeling good, staying energized, and connecting with the warmth of a real kitchen.
          </p>
        </div>
        <div className="w-full lg:w-[48%] mt-8 lg:mt-0">
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/image/img1.jpg"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;