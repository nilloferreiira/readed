import { LoginFormPage } from "./LoginFormPage";
import { LoginGoogle } from "./LoginGoogle";

export function Login() {
  return (
    <div className="bg-darkBlue p-8 lg:p-16 rounded-lg space-y-5 w-full min-h-80 h-full">
      <LoginFormPage />
      <div className="w-full h-0.5 bg-slate-900"/>
      <LoginGoogle />
    </div>
  );
}
