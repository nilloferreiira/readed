'use client'

import Image from "next/image"
import { Logout } from "../../hooks/auth/Logout"

export default function User() {
    const { handleLogout } = Logout()

    return (
        <button onClick={handleLogout}>
          <Image
            src={"https://github.com/nilloferreiira.png"}
            alt={"User iamge"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </button>
    )
}