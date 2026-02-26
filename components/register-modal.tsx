"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRegister } from "@/hooks/use-register";
import Image from "next/image";

export const RegisterModal = () => {

  const isOpen = useRegister((store) => store.isOpen);
  const onClose = useRegister((store) => store.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:w-[360px] rounded-3xl h-max md:w-[500px]">
        <DialogHeader className="flex size-full flex-1 flex-col justify-between">
          <DialogTitle className="flex gap-4 items-start justify-end border-b border-gray-100 p-4 text-2xl font-bold leading-8">
            Select the service you want to register for
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-full flex-1 flex flex-col gap-6 p-6">
          {/* Card 1 */}
          <div className="flex justify-between items-center p-3 rounded-2xl bg-gradient-to-r from-white from-0% via-white via-60% to-[#ead6ca] to-100% border-gray-300 shadow-md">
            <div className="">
              <h4 className="font-normal">
                Both food delivery & dining
              </h4>
              <p className="text-sm text-muted-foreground">
                List your restaurant on both the delivery and dining sections
              </p>
              <button className="text-[#ff1a1a] mt-2 font-medium">
                Register now
              </button>
            </div>
            <Image
              src="/icons/bell.png"
              alt=""
              width={88}
              height={55}
              className="h-14 w-20 self-center"
            />
          </div>

          {/* Card 2 */}
          <div className="flex justify-between items-center p-3 rounded-2xl bg-gradient-to-r from-white from-0% via-white via-60% to-[#ead6ca] to-100% shadow-md">
            <div className="">
              <h4 className="font-normal">
                Both food delivery & dining
              </h4>
              <p className="text-sm text-muted-foreground">
                List your restaurant on both the delivery and dining sections
              </p>
              <button className="text-[#ff1a1a] mt-2 font-medium">
                Register now
              </button>
            </div>
            <Image
              src="/icons/bell.png"
              alt=""
              width={88}
              height={55}
              className="h-14 w-20 self-center"
            />
          </div>

          {/* Card 3 */}
          <div className="flex justify-between items-center p-3 rounded-2xl bg-gradient-to-r from-white from-0% via-white via-60% to-[#ead6ca] to-100% shadow-md">
            <div className="">
              <h4 className="font-normal">
                Both food delivery & dining
              </h4>
              <p className="text-sm text-muted-foreground">
                List your restaurant on both the delivery and dining sections
              </p>
              <button className="text-[#ff1a1a] mt-2 font-medium">
                Register now
              </button>
            </div>
            <Image
              src="/icons/bell.png"
              alt=""
              width={88}
              height={55}
              className="h-14 w-20 self-center"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}