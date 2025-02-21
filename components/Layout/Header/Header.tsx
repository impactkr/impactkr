import Link from "next/link";

import Inner from "@/components/Inner";
import Gnb from "@/components/Layout/Header/Gnb";
import Logo from "@/components/Logo";

function Header() {
  return (
    <header className="absolute left-0 top-0 z-[1] h-[100px] w-full">
      <Inner className="flex h-full items-center justify-between">
        <h1 className="w-[65px] mo:w-[55px]">
          <Link href="/">
            <Logo type="icon" />
          </Link>
        </h1>
        <Gnb />
      </Inner>
    </header>
  );
}

export default Header;
