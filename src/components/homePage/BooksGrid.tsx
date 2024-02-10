"use client";

import { BookCard } from "./BookCard";
import { NewBookCard } from "./NewBookCard";
import { useBooks } from "@/hooks/useBooks";

interface BooksSearch {
  search: string;
}

export function BooksGrid(search: BooksSearch) {
  //lidar com a tipagem
  const { books } = useBooks();

  const filteredBooks =
    search.search !== ""
      ? books?.filter((book) =>
          book.name.toLowerCase().includes(search.search.toLocaleLowerCase())
        )
      : books;

  return (
    <div
      className={`
            grid 
            grid-cols-1 
            md:grid-cols-2
            items-center
            justify-items-center
            lg:grid-cols-3
            gap-4 lg:gap-6
            w-full py-4
            z-0
        `}
    >
      <NewBookCard />
      {/* Iterando sobre Books */}
      {filteredBooks?.map((book: any) => (
        <BookCard
          key={`book_${book.id}`}
          id={book.id}
          name={book.name}
          author={book.author}
          review={book.review}
          rating={book.rating}
          date={book.date}
        />
      ))}
    </div>
  );
}
