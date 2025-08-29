import { Button } from "@/components/ui/button";

import Link from "next/link";

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center px-4 py-[80px]"
      style={{ backgroundImage: `url('/backgroundImage/bg.jpg')` }}
    >
      <div className="max-w-3xl w-full space-y-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold">
          Cooked with Love, Serve with Ease <br />
          <span className="underline">CookCart</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-xl font-medium">
          CookCart is a connected workspace where better, faster work happens
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Button asChild className="bg-[#ff1a1a] hover:bg-[#e60026]">
            <Link href="/sign-up">
              Get CookCart free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;