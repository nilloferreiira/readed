"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "../register/register-form";

export function LoginOrRegister() {
  const [isLoginForm, setIsLoginForm] = useState(false);

  return (
    <div>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={() => setIsLoginForm(!isLoginForm)}
        className="group mt-5"
      >
        {isLoginForm ? (
          <div>
            Nao tem conta?{" "}
            <span className="group-hover:underline">Registre-se</span>
          </div>
        ) : (
          <div>
            Tem conta? <span className="group-hover:underline">Faça login</span>
          </div>
        )}
      </button>
    </div>
  );
}
