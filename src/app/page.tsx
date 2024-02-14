import { Github } from "@/components/loginPage/Github";
import { LoginPageLayout } from "@/components/loginPage/login/login-page-layout";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-100vw m-auto pt-10 lg:h-full">
      <LoginPageLayout />
      <div className="flex flex-col w-auto mt-24">
        <Github />
      </div>
    </div>
  );
}
