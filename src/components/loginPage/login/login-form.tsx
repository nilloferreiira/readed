"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const [isLoginForm, setIsLoginForm] = useState(false);

  const { register, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleFormSubmit({ email, password }: LoginFormSchema) {
    try {
      console.log(email, password);
    } catch {
      toast.error("erro interno");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex flex-col items-center justify-center gap-6 animate-fade-in"
    >
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
            {...register("email")}
            placeholder="Email"
            className="input placeholder-style-left placeholder-fontwhite"
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
            {...register("password")}
            className="input placeholder-style-left placeholder-fontwhite"
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
        className="text-center text-fontWhite cursor-pointer w-full h-12 rounded-lg  outline-none bg-indigo shadow-lg shadow-blue-500/20 hover:bg-indigo/80"
      >
        Logar
      </button>
    </form>
  );
}
