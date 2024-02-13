'use client'

import { Book } from "@phosphor-icons/react";

interface LogoProps {
    textSize?: string,
    LogoSize?: number,
}

export function Logo({textSize, LogoSize}: LogoProps) {
    return (
        <div className={`flex items-center justify-center text-fontWhite font-bold uppercase text-${textSize ? textSize : '2xl'}`}>
            <Book size={LogoSize ? LogoSize : 32} color="#c2d4ea" weight="thin" />
            READ<span className="text-indigo">.ED</span>
        </div>
    )
}