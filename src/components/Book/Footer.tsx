import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

interface BookId {
    id: string | string[],
}

export function Footer(props: BookId) {
    const router = useRouter()

    const redirectToEditBook = () => {
        router.push(`/books/editbook/${props.id}`);
      };

    async function deleteBook() {
        await api.delete(`/books/${props.id}`)

        return router.push('/books')
    }
    
    return (
        <footer className="my-10 flex items-center justify-center lg:justify-start gap-16 mx-auto lg:mx-0 w-full">
          <button
          onClick={redirectToEditBook}            
            className={`
                bg-indigo 
                shadow-lg shadow-blue-500/20
              text-fontWhite
                opacity-80
                py-3 px-6 
                rounded-lg 
                min-w-32 
                hover:opacity-100
                transition-all outline-none
              `}
          >
            Editar
          </button>

          <button 
          onClick={deleteBook}
          className={`
                bg-customRed 
                shadow-lg shadow-red-500/20
              text-fontWhite
                opacity-80
                py-3 px-6 
                rounded-lg 
                min-w-32 
                hover:opacity-100
                transition-all outline-none
              `}
          >
            Apagar
          </button>
        </footer>
    )
}