import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { Main } from "@/components/Book/Main";
import { BookProps } from "@/utils/bookInterface";
import { Header } from "@/components/header/Header";
import { GoBackButton } from "@/components/Book/goBackButton";

export default async function Book() {
  let books: BookProps[] = [];

  const token = cookies().get('token')?.value

  try {
    const response = await api.get("/books", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    books = response.data.books;
    console.log(books)
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
