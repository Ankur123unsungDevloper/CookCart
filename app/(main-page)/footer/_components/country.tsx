import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Country = () => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-lg">
          <Image
            src="/icons/india.png"
            alt="India Flag"
            width={30}
            height={30}
            className="rounded-sm"
          />
          India
          <IoIosArrowDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Image
              src="/icons/india.png"
              alt="India Flag"
              width={30}
              height={30}
              className="rounded-sm"
            />
            India
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2">
            <Image
              src="/icons/united-arab-emirates.png"
              alt="IAE Flag"
              width={30}
              height={30}
              className="rounded-sm"
            />
            UAE
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Country;