'use client'

import { Star } from "@phosphor-icons/react";

interface StarProps {
    isActive: boolean,
    isClickable: boolean,
    onClick: () => void,
}

export function StarComponent(props: StarProps) {
    return (
        <button 
        type="button" 
        onClick={props.isClickable ? props.onClick : undefined} 
        className={`
                    outline-none
                    ${props.isClickable ? 'cursor-pointer' : 'cursor-default'}`}
        >
            <Star size={32} color={props.isActive ? '#FFD700' : '#E1D2E3'} weight={props.isActive ? 'fill' : 'duotone'} />
        </button>
    )
}