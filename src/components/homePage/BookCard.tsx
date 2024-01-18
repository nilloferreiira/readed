"use client";
import { PencilSimple, Star } from "@phosphor-icons/react";
import { useBooks } from "@/hooks/useBooks";

export function BookCard() {
  const { book } = useBooks() 
  // const book = useContext(BookContext) 

  return (
    <div
      className={`
                    bg-darkBlue
                    bg-opacity-75
                    w-80
                    p-6
                    flex
                    flex-col
                    gap-4
                    rounded-lg
                `}
    >
      {/* cardHeader */}
      <div className="flex items-center justify-between gap-10 w-full">
        <h1 className="text-xl font-bold flex items-center justify-center gap-3">
          {book.name}
          <span className="flex items-center justify-center text-startRating text-2xl">
            {book.rating}
            <Star size={24} color="#FFD700" weight="fill" />
          </span>
        </h1>

        {/* editBook */}
        <button className="bg-gradient-to-r from-blue-900 to-indigo p-1 rounded-lg hover:opacity-90 transition-all">
          <PencilSimple size={32} color="#E1D2E3" weight="duotone" />
        </button>
      </div>

      {/* cardContent */}

      <p className="text-fontWhite opacity-70 text-base">
        {book.review}
      </p>
    </div>
  );
}
