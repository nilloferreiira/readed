// 'use client'


import Image from "next/image"
import { Logout } from "@/hooks/auth/Logout"
import { getUser } from "@/lib/auth"
import { LogoutWrapper } from "./LogoutWrapper"

export default function User() {
    const { sub, name, picture } = getUser()

    return (
      <LogoutWrapper>
        
        <div className="flex gap-3 items-center justify-center">
          {/* {name} */}
          <Image
            src={picture}
            alt={"User iamge"}
            width={48}
            height={48}
            className="rounded-full border-2 border-opacity-60 border-zinc-300 hover:border-customRed transition-all" 
            // tirar essa bordar e estilizar melhor ( talvez um dropdown com o nome e a opcao de sair )
            />
        </div>
      </LogoutWrapper>
    )
}