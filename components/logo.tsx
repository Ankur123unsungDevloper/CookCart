import Image from "next/image";

export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 hover:cursor-pointer">
      <Image
        src="/logo.png"
        alt="CookCart Logo"
        width={40}
        height={40}
        className=""
      />
    </div>
  );
};