'use client'

import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function GoBackButton() {
    const router = useRouter();

    const redirectToBooks = () => {
        router.push("/books");
      };

    return (
        <button
          className="flex w-full mx-auto px-8 lg:px-8 mb-8 lg:mb-12"
          onClick={redirectToBooks}
        >
          <CaretLeft size={32} color="#dbccf5" weight="thin" />
        </button>
    )
}