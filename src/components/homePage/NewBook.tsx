"use client";

import Link from "next/link";
import { Plus } from "@phosphor-icons/react";
import * as Tooltip from "@radix-ui/react-tooltip";

export function NewBook() {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link
            href={"/books/newbook"}
            className={`
                bg-indigo 
                shadow-lg shadow-blue-500/20
              text-fontWhite
                opacity-90
                p-3 
                rounded-full 
                absolute
                top-[90%] left-[80%]
                lg:top-[85%] lg:left-[90%]
                hover:opacity-100 
                transition-all outline-none
              `}
          >
            <Plus size={24} />
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            Novo livro
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
