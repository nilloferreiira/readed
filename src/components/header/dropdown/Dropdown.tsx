'use client'

import Image from "next/image"
import { DropdownUser } from "./DropdownUser"
import { useState } from "react"

interface UserProps {
    name: string,
    picture: string
}

export function DropDown(props: UserProps) {
    const [showInfo, setShowInfo] = useState<boolean>(false)


    return (
        <div onClick={() => setShowInfo(!showInfo)}
        className={`flex ${showInfo && 'bg-darkBlue'} gap-3 p-2 lg:px-4 rounded-lg transition-all`}
        >
            {showInfo &&  <DropdownUser name={props.name}/>}
              <Image
                src={props.picture}
                alt={"User iamge"}
                width={48}
                height={48}
                className="rounded-full  hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer" 
                />
        </div>
    )
}