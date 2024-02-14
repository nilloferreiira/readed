"use client";

import { api } from "@/lib/api";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { CircleNotch } from "@phosphor-icons/react";

export function LoginGoogle() {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  // useEffect(()=> {
  //   const isTokenExists = Cookies.get('token')
  //   if(isTokenExists) {
    
  //   return router.push("/books");
  //   }

  // },[])

  const credentialsSchema = z.object({
    sub: z.string(),
    name: z.string(),
    picture: z.string().url(),
  });

  type CredentialsSchema = z.infer<typeof credentialsSchema>;

  const handleCretendialResponse = async (response: any) => {
    try {
      setLoading(true);
      const data: CredentialsSchema = jwtDecode(response.credential);

      const registerResponse = await api.post("/register", {
        sub: data.sub,
        name: data.name,
        picture: data.picture,
      });

      const { token } = registerResponse.data;

      Cookies.set("token", token, { path: "/", expires: 30 });

      return router.push("/books");
    } catch {
      setLoading(false);
      toast.error("Erro durante o login com o google! Tente outro método");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-start justify-center">
      {isLoading ? (
        <div className="bg-[#0d0d0e] text-white font-medium rounded-full pr-4 h-10 flex items-center justify-start gap-2 w-full">
          <div className="bg-white/90 p-1 rounded-full">
            <CircleNotch size={24} color="#0d0d0e" className="animate-spin" />
          </div>
          Carregando
        </div>
      ) : (
        <div className="w-full">
          <GoogleLogin
            theme="filled_black"
            shape="pill"
            onSuccess={handleCretendialResponse}
            onError={() => {
              console.log("Login failed");
            }}
          />
        </div>  
      )}
    </div>
  );
}
