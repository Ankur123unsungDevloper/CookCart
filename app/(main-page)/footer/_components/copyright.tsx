import Link from "next/link";

const CopyRight = () => {
  return (
    <div className="py-2 px-10 text-center">
      <p className="text-[#333]">
        Copyright &copy; {new Date().getFullYear()}&nbsp;
        <Link href="" className="text-[#ff0157] font-medium no-underline">CookCart</Link>. All rights reserved.
      </p>
    </div>
  );
};

export default CopyRight;