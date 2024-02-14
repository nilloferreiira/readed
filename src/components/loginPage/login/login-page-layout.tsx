"use client";

import { Login } from "./login-container";
import { LogoLoginPage } from "./login-page-logo";

export function LoginPageLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-2 lg:gap-64">
      <div className="flex flex-col items-start justify-start py-5">
        <LogoLoginPage />
        <span className="p-2 font-medium text-2xl text-fontWhite text-center w-full mx-auto lg:ml-5">
          Sua biblioteca Pessoal
        </span>
      </div>

      <div className="w-4/5 md:w-1/2 lg:w-1/4 ">
        <Login />
      </div>
    </div>
  );
}
