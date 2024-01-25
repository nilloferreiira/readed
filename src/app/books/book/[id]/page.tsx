import { Header } from "@/components/header/Header";
import { Main } from "@/components/Book/Main";
import { GoBackButton } from "@/components/Book/goBackButton";
import { BookProps } from "@/utils/bookInterface";
import { api } from "@/lib/api";

export default async function Book() {
  let books: BookProps[] = [];

  try {
    const response = await api.get("/books");

    books = response.data.books;
    if (!Array.isArray(response.data)) {
      throw new Error("Data is not an array!");
    }
  } catch {
    console.log("Erro na requisição do page book/id");
  }

  return (
    <div className="flex flex-col w-full">
      <Header />
      <GoBackButton />
      <Main books={books}/>
    </div>
  );
}
