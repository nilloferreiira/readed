import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { BookProps } from "@/utils/bookInterface";
import { Header } from "@/components/header/Header";
import { GoBackButton } from "@/components/Book/goBackButton";
import { EditBook } from "@/components/EditBook/edit-book";

export default async function editBook() {
  return (
    <div>
      <Header />
      <GoBackButton />
      <EditBook />
    </div>
  );
}
