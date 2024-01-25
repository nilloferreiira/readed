'use client'

import { useEffect, useState } from "react";
import { StarComponent } from "./StarComponent";

const items: number[] = [... new Array(5).keys() as any]


interface StarsProps {
    onStarChange?: (index: number | undefined) => void;
    initialIndex?: number,
    isClickable: boolean,
  }

export function Stars({onStarChange, initialIndex, isClickable}: StarsProps) {
    const [activeIndex, setActiveIndex] = useState<number | undefined>();

    if(initialIndex) {
        useEffect(()=> {
            setActiveIndex(initialIndex)
        }, [initialIndex])    
    }

    const onClickStar = (index: number) => {
        setActiveIndex(state => state === index ? undefined : index)
        if(onStarChange) {
            onStarChange(activeIndex === index ? undefined : index + 1);
        }
    } 

    return (
        <div className="flex items-center justify-center w-full p-2 z-0">
            {items.map((index) => (
                <StarComponent key={`star_${index}`} isActive={index <= activeIndex!} onClick={() => onClickStar(index)} isClickable={isClickable}/> 
            ))}
        </div>
    )
}