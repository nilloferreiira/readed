import { Eye, EyeClosed } from "@phosphor-icons/react";
import { User, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const registerFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6, "minino de 6 digitos"),
  confirmedPassword: z.string().min(6, "minino de 6 digitos"),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  const { register, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  async function handleFormSubmit({name, email, password, confirmedPassword}: RegisterFormSchema) {
    if (password !== confirmedPassword) {
      toast.error("As senhas são diferentes!");

      return;
    }

    try {
      console.log(name, email, password);
    } catch {
      toast.error("erro interno");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex flex-col items-center justify-center gap-6 animate-fade-in"
    >
      <h3 className="font-bold text-2xl">Cadastre-se</h3>
      <div className="w-full h-12 flex items-center justify-around bg-bg hover:shadow-blue-500/20 transition-all shadow-lg shadow-blue-500/10 text-fontWhite  rounded-lg">
        <div className="flex items-center justify-start">
          <User
            className="text-bg"
            size={16}
            fill={"#8f97ae"}
            strokeWidth={1}
          />

          <input
            type="text"
            {...register("name")}
            placeholder="Nome"
            className="input placeholder-style-left placeholder-fontwhite"
          />
        </div>

        <div className="size-5" />
      </div>

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
            {...register("password")}
            placeholder="Senha"
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
            placeholder="Confirmar senha"
            {...register("confirmedPassword")}
            className="input placeholder-style-left placeholder-fontwhite"
          />
        </div>

        <div className="size-5" />
      </div>

      <div className="flex mt-6 justify-end w-full">
        <button
          type="submit"
          className="text-center text-fontWhite cursor-pointer w-full h-12 rounded-lg  outline-none bg-indigo shadow-lg shadow-blue-500/20 hover:bg-indigo/80"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
