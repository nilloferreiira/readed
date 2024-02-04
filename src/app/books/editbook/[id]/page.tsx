import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { BookProps } from "@/utils/bookInterface";
import { Header } from "@/components/header/Header";
import { GoBackButton } from "@/components/Book/goBackButton";
import { EditBookForm } from "@/components/EditBook/EditBookForm";
import { EditBook } from "@/components/EditBook/edit-book";


export default async function editBook() {
    let books: BookProps[] = [];

    const token = cookies().get('token')?.value

    try {
      const response = await api.get("/books", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      books = response.data.books;
      if (!Array.isArray(response.data)) {
        throw new Error("Data is not an array!");
      }
    } catch {
      console.log("Erro na requisição da page editbook/id");
    }
  

    return (
        <div>
        <Header />
        <GoBackButton/>
        {/* <EditBookForm book={books} /> */}
        <EditBook />
        </div>
    )
}