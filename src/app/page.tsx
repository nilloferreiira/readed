import { LoginButton } from "@/components/loginPage/LoginButton";
import { Logo } from "@/components/logo";
import { Github } from "@/components/loginPage/Github";

export default function Login() {
  return (
    <div className="flex flex-col gap-64 items-center justify-center w-full mx-auto lg:my-64 my-72">
      
      <div className="flex flex-col lg:w-1/4 w-2/4 items-center justify-center gap-8">
      <Logo/>
      <LoginButton />
      <div className="flex flex-col w-auto mt-24">
      <Github />
      </div>
      </div>

    </div>
  );
}
