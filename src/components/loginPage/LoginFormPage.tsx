"use client";

import { Envelope, Eye, EyeClosed } from "@phosphor-icons/react";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export function LoginFormPage() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit() {}

  return (
    <form className="w-full flex flex-col items-center justify-center gap-6">
      <h3 className="font-bold text-2xl">Faça login</h3>
      <div className="w-full h-12 flex items-center justify-around bg-bg hover:shadow-blue-500/20 transition-all shadow-lg shadow-blue-500/10 text-fontWhite  rounded-lg">
        <div className="flex items-center justify-start">
          <Mail
            className="text-bg"
            size={16}
            fill={"#8f97ae"}
            strokeWidth={1}
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent placeholder-fontwhite placeholder-opacity-80 placeholder-style-left outline-none py-5"
          />
        </div>

        <div className="size-5" />
      </div>

      <div className="w-full h-12 flex items-center justify-around bg-bg hover:shadow-blue-500/20 transition-all shadow-lg shadow-blue-500/10 text-fontWhite  rounded-lg">
        <div className="flex items-center justify-start">
          <Lock
            className="text-bg"
            size={16}
            fill={"#8f97ae"}
            strokeWidth={1}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            className="bg-transparent placeholder-fontwhite placeholder-opacity-80 placeholder-style-left outline-none py-5"
          />
        </div>

        <span className="cursor-pointer " onClick={handleShowPassword}>
          {showPassword ? (
            <EyeClosed weight="bold" size={20} />
          ) : (
            <Eye weight="bold" size={20} />
          )}
        </span>
      </div>

      <span>Esqueceu sua senha?</span>

      <button
        type="submit"
        onClick={handleSubmit}
        className="text-center text-fontWhite cursor-pointer w-full h-12 rounded-lg  outline-none bg-indigo shadow-lg shadow-blue-500/20 hover:bg-indigo/80"
      >
        Logar
      </button>

      <button className="group">
        Nao tem conta?{" "}
        <span className="group-hover:underline">Registre-se</span>
      </button>
    </form>
  );
}
