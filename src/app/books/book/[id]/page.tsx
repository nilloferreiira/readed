import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { BookProps } from "@/utils/bookInterface";
import { Header } from "@/components/header/Header";
import { GoBackButton } from "@/components/Book/goBackButton";
import { Main } from "@/components/Book/Main";

export default async function Book() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <GoBackButton />
      <Main />
    </div>
  );
}
