import { BookCard } from "./BookCard";

export function BooksGrid() {
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
      {/* criar map  */}
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
