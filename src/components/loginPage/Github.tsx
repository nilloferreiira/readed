'use client'

import { GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

export function Github() {
    return (
        <Link 
        className="bg-indigo rounded-full p-2 shadow-lg shadow-blue-500/30"
         href={"https://github.com/nilloferreiira"}
         >
            <GithubLogo size={32} color="white" weight="regular" />
        </Link>
    )

}