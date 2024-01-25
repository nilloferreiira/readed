import { GoBackButton } from "@/components/Book/goBackButton";
import { NewBookForm } from "@/components/FormBook/NewBookForm";
import { Header } from "@/components/header/Header";

export default function FormBookPage() {
  return (
    <div>
      <Header />
      <GoBackButton />
      <NewBookForm />
    </div>
  );
}
