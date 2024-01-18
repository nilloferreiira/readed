import { useState, useEffect } from "react";
import { BookProps } from "@/utils/bookInterface";
import { api } from "@/lib/api";
import axios from "axios";

export function useBooks() {
  const [books, setBooks] = useState({} as BookProps);

  
    setBooks({
      id: "z23",
      name: "vermelho e branco e sangue azul",
      author: "sldp",
      review:
        "Set a preimadas sales fee and add social links, a description, profile and banner images, and a description.",
      rating: 2,
    });

  
  function setNewBook(book: BookProps) {
    // setBook({
    //   id: book.id,
    //   name: book.name,
    //   author: book.author,
    //   review: book.review,
    //   rating: book.rating,
    // });
  }

  return { books, setNewBook };
}



