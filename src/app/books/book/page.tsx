'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Book() {
    const router = useRouter()

    const redirect = () => {
            router.push('/books')
    }

    return (
        <button onClick={redirect}>
            Voltar para books
        </button>
    )
}