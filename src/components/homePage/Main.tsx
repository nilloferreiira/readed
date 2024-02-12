"use client";

import { NewBook } from "./NewBook";
import React from 'react';

import { BooksGrid } from "./BooksGrid";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState, ChangeEvent } from "react";

export function Main() {
  const [search, setSearch] = useState("");

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const inputContent = event.target.value;

    setSearch(inputContent);
  }
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
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col gap-6 lg:gap-12 items-center lg:items-start justify-center w-full p-6">
          <form className="w-full space-y-2">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Busque seu livro"
              className="bg-transparent text-3xl text-slate-400 outline-none placeholder:text-3xl placeholder:text-slate-400 placeholder:font-bold"
            />
            <div className="h-0.5 w-full bg-slate-800" />
          </form>
          <h1 className="h1">Suas leituras</h1>
        </div>
        <BooksGrid search={search} />
        <NewBook />
      </QueryClientProvider>
    </main>
  );
}
