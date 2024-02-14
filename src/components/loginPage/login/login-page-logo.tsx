"use client";

import { Book } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";

export function LogoLoginPage() {
  const isDesktopOrMobile = useMediaQuery({
    query: "(min-width: 768px)",
  });

  let bookSize: number;
  let textSize: string;

  if (isDesktopOrMobile) {
    bookSize = 96;
    textSize = "text-7xl";
  } else {
    bookSize = 64;
    textSize = "text-5xl";
  }

  return (
    <div
      className={`flex items-center justify-center text-fontWhite font-bold uppercase ${textSize}`}
    >
      <Book size={bookSize} color="#c2d4ea" weight="thin" />
      READ<span className="text-indigo">.ED</span>
    </div>
  );
}
