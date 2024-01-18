'use client'

import { useState } from "react";
import { StarComponent } from "./StarComponent";

const items: number[] = [... new Array(5).keys() as any]

export function Stars() {
    const [activeIndex, setActiveIndex] = useState<number>();

    const onClickStar = (index: number) => {
        setActiveIndex(state => state === index ? undefined : index)
        console.log('clicado') //apagar
    } 

    return (
        <div className="flex items-center justify-center w-full p-2 z-0">
            {items.map((index) => (
                <StarComponent key={`star_${index}`} isActive={index <= activeIndex!} onClick={()=> onClickStar(index)}/> 
            ))}
        </div>
    )
}