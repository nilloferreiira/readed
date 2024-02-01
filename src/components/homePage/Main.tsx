'use client'

import { NewBook } from "./NewBook";
import { BooksGrid } from "./BooksGrid";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export function Main() {
  return (
    <main
      className={`
                    mx-auto lg:px-20
                    flex flex-col 
                    items-center lg:items-start
                    w-full
                    gap-8
                    lg:gap-12
                `}
    >
      <div className="flex flex-col gap-6 lg:gap-12 items-center lg:items-start justify-center">
        <NewBook />
        <h1 className="h1">Suas leituras</h1>
      </div>
      <QueryClientProvider client={queryClient}>
        <BooksGrid />
      </QueryClientProvider>
    </main>
  );
}
