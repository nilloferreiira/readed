'use client'

import { Book } from "@phosphor-icons/react";

export function Logo() {
    return (
        <div className={`flex text-fontWhite font-bold uppercase text-2xl`}>
            <Book size={32} color="#c2d4ea" weight="thin" />
            READ<span className="text-indigo">.ED</span>
        </div>
    )
}