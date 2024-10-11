"use client";

import Image from "next/image";

interface WithArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}

export default function WithArrow({
  direction,
  ariaLabel,
  onClick,
}: WithArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 hidden md:block ${direction === "prev" ? "left-9" : "right-9"} top-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-primary bg-white/10 p-4 backdrop:blur-[2px]`}
      aria-label={ariaLabel}
    >
      <Image
        className="-z-10"
        src={
          direction === "prev"
            ? "/images/iconArrowLeft.svg"
            : "/images/iconArrowRight.svg"
        }
        width={24}
        height={24}
        alt={ariaLabel}
      />
    </button>
  );
}
