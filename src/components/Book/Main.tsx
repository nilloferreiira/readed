"use client";

import { Footer } from "./Footer";
import { useGetId } from "@/hooks/useGetId";
import { BookProps } from "@/utils/bookInterface";
import { Stars } from "../FormBook/Stars";

interface books {
  books: BookProps[];
}

export function Main(props: books) {
  const { id } = useGetId();

  let book: BookProps;

  const foundBook = props.books.find((item) => item.id === id);

  if (foundBook) {
    book = foundBook;
  } else {
    throw new Error("Invalid Id");
  }

  return (
    <main
      className={`
                flex
                flex-col
                items-start
                justify-start
                w-4/5
                lg:w-full
                mx-auto lg:px-20
                gap-5 lg:gap-10
                
            `}
    >
      {/* first container  */}
      <div
        className={`
                    w-full
                    flex 
                    flex-col lg:flex-row 
                    items-start
                    justify-center lg:justify-between
                    `}
      >
        <div className="flex flex-col gap-2 mb-2 lg:mb-0">
          <h1 className="font-bold text-4xl text-fontWhite opacity-80 lg:h1">
            {book.name}
          </h1>
          <h2 className="font-normal text-base text-fontWhite">
            {book.author}
          </h2>
        </div>
        <span className="-ml-2">
          <Stars initialIndex={book.rating} isClickable={false} />
        </span>
      </div>

      <hr className="w-full block" />

      {/* second container  */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-fontWhite">Resenha</h1>

        <p className="text-fontWhite opacity-70 text-xl">{book.review}</p>
      </div>

      {/* footer  */}
      <Footer id={id} />
    </main>
  );
}
