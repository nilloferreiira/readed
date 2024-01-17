'use client'

import { Star } from "@phosphor-icons/react";

interface StarProps {
    isActive: boolean,
    onClick: () => void,
}

export function StarComponent(props: StarProps) {
    return (
        <button onClick={props.onClick} className="outline-none">
            <Star size={32} color={props.isActive ? '#FFD700' : '#E1D2E3'} weight={props.isActive ? 'fill' : 'duotone'} />
        </button>
    )
}