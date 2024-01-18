"use client";
import { PencilSimple, Star } from "@phosphor-icons/react";
import { BookProps } from "@/utils/bookInterface";



export function BookCard(book: BookProps) {
  return (
    <div
      className={`
                    bg-darkBlue
                    bg-opacity-75
                    w-80
                    h-48
                    px-6
                    py-3
                    flex
                    flex-col
                    gap-2
                    rounded-lg
                `}
    >
      {/* cardHeader */}
      <div className="flex items-center justify-between gap-2 w-full">
        <h1 className="text-xl font-bold flex items-center justify-center gap-2">
          {book.name}
          <span className="flex items-center justify-center text-startRating text-2xl font-bold">
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

      <p className="text-fontWhite opacity-70 text-base overflow-hidden line-clamp-4">
        {book.review}
      </p>
    </div>
  );
}
