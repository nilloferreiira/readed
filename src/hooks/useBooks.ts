import { api } from "@/lib/api";
import Cookies from "js-cookie";
import { BookProps } from "@/utils/bookInterface";
import { useQuery } from "@tanstack/react-query";

export function useBooks() {
    async function getBooks() {
        let booksResponse: BookProps[] = [];
        const token = Cookies.get("token");
    
        try {
          const response = await api.get("/books", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          booksResponse = response.data.books;
          if (!Array.isArray(response.data)) {
            throw new Error("Data is not an array!");
          }
        } catch {
          console.log("Erro na requisição do booksgrid");
        }
    
        return booksResponse;
      }
    
      const { data: books } = useQuery({
        queryKey: ["books"],
        queryFn: getBooks,
      });

      return { books }
}