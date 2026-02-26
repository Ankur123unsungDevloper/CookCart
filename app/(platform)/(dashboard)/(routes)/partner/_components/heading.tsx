"use client";

import { Button } from "@/components/ui/button";

import { useRegister } from "@/hooks/use-register";
import { useFoodProfileImage } from "@/hooks/use-food-profile-image";

import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Heading = () => {

  const register = useRegister();
  const foodprofileImg = useFoodProfileImage();

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[685px] w-full flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/backgroundImage/bg.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center relative top-15">
        <div className="max-w-2xl w-full text-center text-white">
          <h3 className="text-base sm:text-xl md:text-5xl font-bold">
            Partner with CookCart and grow your business
          </h3>
          <div className="flex items-center justify-center gap-6 mt-40">
            <Button
              size="lg"
              className="bg-[#ff1a1a] hover:bg-[#e60026] size-full py-1 font-medium w-fit px-9 pb-4.5 pt-4 text-base leading-6 md:py-3 md:text-lg lg:pb-4.5 lg:pt-4 lg:text-xl"
              onClick={register.onOpen}
            >
              Register your Kitchen
            </Button>
          </div>
        </div>
        <div className="mt-9 w-full rounded-[10px] border bg-white p-3 shadow-[0px_8px_12px_0px_rgba(28,28,28,0.08)] md:mx-auto md:mt-16 md:flex md:w-[700px] md:flex-row-reverse md:items-center md:justify-between md:rounded-[14px] md:p-4 lg:mt-16 lg:w-[900px] lg:p-5 xl:w-[1000px] xl:p-8">
          <div></div>
          <div className="block py-4 md:hidden"></div>
          <div className="pb-2 md:m-0 md:flex md:flex-col md:justify-start md:gap-7">
            <div className="hidden space-y-1 md:block">
              <h2 className="text-2xl font-semibold leading-7 text-black">
                Get started: It only takes 10 minutes
              </h2>
              <p className="text-base leading-5.5 text-gray-600">
                Please keep these documents and details ready for a smooth sign-up
              </p>
            </div>
            <div className="flex-col justify-center gap-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 md:space-y-0">
              <div className="flex items-start">
                <div className="mt-0.5 mr-2 flex items-start justify-center">
                  <IoCheckmarkCircleSharp className="text-green-500 h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm font-medium md:text-xs lg:text-sm">PAN card</div>
              </div>
              <div className="flex items-start">
                <div className="mt-0.5 mr-2 flex items-start justify-center">
                  <IoCheckmarkCircleSharp className="text-green-500 h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm font-medium md:text-xs lg:text-sm">GST number, if applicable</div>
              </div>
              <div className="flex items-start">
                <div className="mt-0.5 mr-2 flex items-start justify-center">
                  <IoCheckmarkCircleSharp className="text-green-500 h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm font-medium md:text-xs lg:text-sm">
                  FSSAI license
                  <div className="text-[13px] md:text-[11px] lg:text-[13px]">
                    <span className=" font-medium text-[#9197A6]">
                      Don&apos;t have a FSSAI license?
                      <a
                        href=""
                        target="_blank"
                        className="ml-2 font-medium text-[#ff1a1a] md:ml-0 lg:ml-2"
                      >
                        Apply here.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-0.5 mr-2 flex items-start justify-center">
                  <IoCheckmarkCircleSharp className="text-green-500 h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm font-medium md:text-xs lg:text-sm">
                  Menu and profile food image
                  <div className="text-[13px] md:text-[11px] lg:text-[13px]">
                    <span className=" font-medium text-[#9197A6]">
                      What is profile food image?
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={foodprofileImg.onOpen}
                        className="size-full rounded-xl text-sm leading-4 text-[#ff1a1a] hover:text-[#e60026] hover:bg-white w-fit font-medium"
                      >
                        Refer here.
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-0.5 mr-2 flex items-start justify-center">
                  <IoCheckmarkCircleSharp className="text-green-500 h-5 w-5" />
                </div>
                <div className="flex flex-col text-sm font-medium md:text-xs lg:text-sm">Bank account details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;