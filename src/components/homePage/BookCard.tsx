"use client";
import Link from "next/link";
import { ptBR } from "date-fns/locale";
import { Star } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { BookProps } from "@/utils/bookInterface";

export function BookCard(book: BookProps) {
  return (
    <Link
      href={`/books/book/${book.id}`}
      className={`
                    bg-darkBlue
                    bg-opacity-80
                    w-80
                    h-48
                    px-6
                    py-3
                    flex
                    flex-col
                    gap-2
                    rounded-lg
                    hover:bg-opacity-50
                    hover:shadow-lg hover:shadow-blue-700/20
                `}
    >
      <div className="w-full flex items-center justify-start text-sm text-fontWhite/60">
        Adicionado {formatDistanceToNow(book.date, { locale: ptBR, addSuffix: true })}
      </div>

      <div className="flex items-center justify-between gap-2 w-full">
        <h1 className="text-xl font-bold flex items-center justify-center gap-2">
          {book.name}
        </h1>
        <span className="flex items-center justify-center text-startRating text-2xl font-bold">
          {book.rating}
          <Star size={24} color="#FFD700" weight="fill" />
        </span>
      </div>

      <p className="text-fontWhite opacity-70 text-base overflow-hidden line-clamp-4">
        {book.review}
      </p>
    </Link>
  );
}
