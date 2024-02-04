"use client";

import Image from "next/image";
import { useState } from "react";
import { getUser } from "@/lib/auth";
import { DropdownUser } from "./DropdownUser";
import { useQuery } from "@tanstack/react-query";

interface UserProps {
  name: string;
  picture: string;
}

export function DropDown() {
  const [showInfo, setShowInfo] = useState<boolean>(false);


  const {data: user} = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  })

  return (
    <div
      onClick={() => setShowInfo(!showInfo)}
      className={`
                flex 
                gap-3 
                p-2 lg:px-4 
                rounded-lg 
                animate-fade-in
                transition-all
                ${showInfo && "bg-darkBlue"} 
      `}
    >
      {showInfo && (
        <div className="animate-fade-in transition-all">
          {user && (
          <DropdownUser name={user.name} />
          )}
        </div>
      )}

      {user && (
        <Image
          src={user.picture}
          alt={"User iamge"}
          width={48}
          height={48}
          className="rounded-full  hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
        />
      )}
    </div>
  );
}
