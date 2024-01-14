'use client'
import { createContext, ReactNode, useState, useEffect } from "react";
import { BookProps } from "@/lib/bookInterface";
import { useBooks } from "@/hooks/useBooks";

interface BookContextProps {
  book: BookProps;
}

const BookContext = createContext<BookContextProps | undefined>(undefined);
export default BookContext

export function BookProvider({ children }: { children: ReactNode }) {
  const { book }  = useBooks() 

  if(book === undefined) {
    throw new Error('book is undefined')
  }

  useEffect(()=> {
    console.log(book)
  }, [book])

  return (
    <BookContext.Provider value={ { book } }>
      {children}
    </BookContext.Provider>
  );
}
