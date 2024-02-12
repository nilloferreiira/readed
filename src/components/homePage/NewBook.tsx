"use client"

import { Plus } from "@phosphor-icons/react";
import Link from "next/link";

export function NewBook() {

  return (
    <Link href={"/books/newbook"}
      className={`
                bg-indigo 
                shadow-lg shadow-blue-500/20
              text-fontWhite
                opacity-90
                p-3 
                rounded-full 
                absolute
                top-[85%] left-[90%]
                hover:opacity-100 
                transition-all outline-none
              `}
    >
      <Plus size={24}/>
    </Link>
  );
}
