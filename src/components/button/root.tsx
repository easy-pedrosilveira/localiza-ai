"use client";

import { combineClassNames } from "@/lib";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className }: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      className={combineClassNames(
        "w-[180px] h-11 rounded-[10px] bg-blue-0160F7 border-2 border-black-33303E shadow-button-shadow font-semibold leading-[19.36px] text-base",
        className,
        {
          "bg-black-33303E shadow-custom-bottom": isLoading,
        }
      )}
    >
      {children}
    </button>
  );
}
