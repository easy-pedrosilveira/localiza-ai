"use client";

import Image from "next/image";
import ArrowScrollToTop from "@/assets/arrow-scroll-to-top.svg";
import { scrollToTop } from "@/lib";

export function ScrollToTop() {
  return (
    <div
      onClick={scrollToTop}
      className="w-56 h-12 rounded-[10px] flex items-center justify-center gap-4 cursor-pointer bg-gray-495263/35 text-lg"
    >
      <Image
        width={20}
        height={28}
        src={ArrowScrollToTop}
        alt="ArrowScrollToTop"
      />
      <span>Voltar ao Topo</span>
    </div>
  );
}
