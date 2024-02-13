"use client";

import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import { Login } from "./Login";

export function LoginPageLayout() {
  const isDesktopOrMobile = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-2 lg:gap-64">
      <div className="flex flex-col items-start justify-start py-5">
        <Logo
          LogoSize={isDesktopOrMobile ? 96 : 64}
          textSize={isDesktopOrMobile ? "7xl" : "5xl"}
        />
        <span className="p-2 font-medium text-2xl text-fontWhite text-center w-full mx-auto lg:ml-5">
          Sua biblioteca Pessoal
        </span>
      </div>

      <div className="w-4/5 md:w-1/2 lg:w-1/4">
        <Login />
      </div>
    </div>
  );
}
