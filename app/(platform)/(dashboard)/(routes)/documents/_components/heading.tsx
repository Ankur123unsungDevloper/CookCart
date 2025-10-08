import Image from "next/image";
import Link from "next/link";

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center px-4 py-[80px]"
      style={{ backgroundImage: `url('/backgroundImage/bg.jpg')` }}
    >
      <div className="max-w-4xl w-full space-y-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold pb-2">
          CookCart
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold">
          India’s #1<br />
          home food delivery app
        </h1>
        <h3 className="text-base sm:text-xl md:text-xl font-medium">
          Experience fast & easy online ordering<br />
          on the CookCart app
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          {/* App Store Button */}
          <Link href="/sign-up" className="transition-transform duration-300 hover:scale-110">
            <Image
              src="/icons/appstore.png"
              alt="App Store"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          {/* Play Store Button */}
          <Link href="/contact-sales" className="transition-transform duration-300 hover:scale-110">
            <Image
              src="/icons/playstore.png"
              alt="Play Store"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      {/* Scroll down button */}
    </div>
  );
};

export default Heading;