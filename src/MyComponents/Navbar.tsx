import { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="z-[999] fixed flex justify-around items-center bg-[#1f242e] w-full h-[15vw] lg:h-[5.2vw] text-white lg:pl-[5vw] lg:pr-[4vw]">
      <div className="w-[20vw] h-1/2 bg-red-500 rounded-md overflow-hidden relative hidden lg:block">
        <input type="text" className="w-full h-full text-zinc-800 pl-[3vw]" />
        <div className="h-full w-[3vw] absolute top-1/2 -translate-y-1/2 left-0">
          <CiSearch style={{ width: "100%", height: "100%", color: "black" }} />
        </div>
      </div>
      <div className="flex px-[1vw] lg:px-0 lg:justify-between gap-[4vw] items-center lg:gap-[4vw]">
        <Button>Categories</Button>
        <Button>Website Builders</Button>
        <Button className="lg:pl-[4vw]">Today's deals</Button>
      </div>
    </div>
  );
}

export function Button({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <button
      id={id}
      className={`${className} text-[600] text-[3vw] lg:text-[1.2vw] group relative`}
    >
      {children}
      <div
        className="w-full scale-0 h-[2.5px] bg-[#cc6425] group-hover:scale-100"
        style={{ transition: "all 0.3s" }}
      ></div>
    </button>
  );
}

export default Navbar;
