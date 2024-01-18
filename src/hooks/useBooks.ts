import { useState, useEffect } from "react";
import { BookProps } from "@/utils/bookInterface";

export function useBooks() {
  const [book, setBook] = useState({} as BookProps);

  const [activeIndex, setActiveIndex] = useState<number | undefined>();


  useEffect(() => {
    setBook({
      id: "z23",
      name: "vermelho e branco e sangue azul",
      author: "sldp",
      review:
        "Set a preimadas sales fee and add social links, a description, profile and banner images, and a description.",
      rating: 2,
    });
  }, []);
  
  const setNewBook = (book: BookProps) => {
    setBook({
      id: book.id,
      name: book.name,
      author: book.author,
      review: book.review,
      rating: book.rating,
    });
  };

  return { book, setNewBook, activeIndex, setActiveIndex };
}



