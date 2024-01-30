"use client";

import { api } from "@/lib/api";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import { z } from "zod";

export function Login() {
  const router = useRouter();
  
  const credentialsSchema = z.object({
    sub: z.string(),
    name: z.string(),
    picture: z.string().url(),
  });
  
  type CredentialsSchema = z.infer<typeof credentialsSchema>;
  
  const handleCretendialResponse = async (response: any) => {
    const data: CredentialsSchema = jwtDecode(response.credential);
    
    const registerResponse = await api.post("/register", {
      sub: data.sub,
      name: data.name,
      picture: data.picture,
    });
    
    const { token } = registerResponse.data
    
    Cookies.set('token', token, { path: '/' ,expires: 30});

    return router.push('/books')
  };


  return (
    <div>
      <GoogleLogin
        theme="filled_black"
        shape="pill"
        onSuccess={handleCretendialResponse}
        onError={() => {
          console.log("Login failed");
        }}
      />
    </div>
  );
}
