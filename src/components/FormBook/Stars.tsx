'use client'

import { useState } from "react";
import { StarComponent } from "./StarComponent";

const items: number[] = [... new Array(5).keys() as any]


interface StarsProps {
    onStarChange: (index: number | undefined) => void;
  }
  

export function Stars({onStarChange}: StarsProps) {
    const [activeIndex, setActiveIndex] = useState<number | undefined>();

    const onClickStar = (index: number) => {
        setActiveIndex(state => state === index ? undefined : index)
        // onStarChange(index + 1)
        onStarChange(activeIndex === index ? undefined : index + 1);
    } 

    return (
        <div className="flex items-center justify-center w-full p-2 z-0">
            {items.map((index) => (
                <StarComponent key={`star_${index}`} isActive={index <= activeIndex!} onClick={()=> onClickStar(index)}/> 
            ))}
        </div>
    )
}