import { GoBackButton } from "@/components/Book/goBackButton";
import { EditBookForm } from "@/components/EditBook/EditBookForm";
import { Header } from "@/components/header/Header";
import { api } from "@/lib/api";
import { BookProps } from "@/utils/bookInterface";


export default async function editBook() {
    let books: BookProps[] = [];

    try {
      const response = await api.get("/books");
  
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
        <EditBookForm book={books} />
        </div>
    )
}