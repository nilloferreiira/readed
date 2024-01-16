import { BookCard } from "./BookCard";

export function BooksGrid() {
    return(
        <div className={`
            grid grid-cols-1 
            lg:grid-cols-3
            gap-4
            w-full py-4
            z-0
        `}>
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
    )
}