"use client";

// import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "./Logo";

function ComingSoon() {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 z-[3] flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="w-[100px] mo:w-[80px]">
          <Logo type="icon" />
        </div>
        <p className="mt-[16px] text-2xl font-medium text-white">
          페이지 준비 중입니다.
        </p>

        <button
          className="mt-[28px] h-[40px] w-[150px] rounded-[8px] bg-white text-black transition duration-300 hover:opacity-90"
          onClick={() => router.push("/")}
        >
          이전 페이지로 이동
        </button>
      </div>
    </div>
  );
}

export default ComingSoon;
