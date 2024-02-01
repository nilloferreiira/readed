'use client'

import { api } from "@/lib/api";
import Cookies from "js-cookie";
import { BookCard } from "./BookCard";
import { BookProps } from "@/utils/bookInterface";
import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers"

export function BooksGrid() {
  
  async function getBooks() {
    let booksResponse: BookProps[] = [];
    // const token = cookies().get('token')?.value
    const token = Cookies.get('token')

    try {
      const response = await api.get("/books", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      booksResponse = response.data.books;
      if (!Array.isArray(response.data)) {
        throw new Error("Data is not an array!");
      }
    } catch {
      console.log("Erro na requisição do booksgrid");
    }


    return booksResponse
  }
  

  const { data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })


  return (
    <div
      className={`
      grid grid-cols-1 
            md:grid-cols-2
            items-center
            justify-items-center
            lg:grid-cols-3
            gap-4
            w-full py-4
            z-0
        `}
    >
      {/* Iterando sobre Books */}
      {books?.map((item: any) => (
        <BookCard
          key={`book_${item.id}`}
          id={item.id}
          name={item.name}
          author={item.author}
          review={item.review}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
