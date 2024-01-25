"use client";

import { z } from "zod";
import { api } from "@/lib/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stars } from "../FormBook/Stars";
import { BookProps } from "@/utils/bookInterface";
import { useGetId } from "@/hooks/useGetId";

// Types
const formSchema = z.object({
  name: z.string().min(2),
  author: z.string().min(2),
  review: z.string(),
  rating: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

interface EditBookProps {
  book: BookProps[];
}

// end Types

export function EditBookForm(props: EditBookProps) {
  const { id } = useGetId();

  let books: BookProps;

  const foundBook = props.book.find((item) => item.id === id);
  if (foundBook) {
    books = foundBook;
  } else {
    throw new Error("Invalid Id");
  }

  const { register, handleSubmit, setValue } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: books.name,
      author: books.author,
      review: books.review,
      rating: String(books.rating),
    },
  });

  const handleStarChange = (index: any) => {
    if (index == undefined) {
      setValue("rating", "0");
    } else {
      setValue("rating", index.toString());
    }
  };

  //envio do formulario
  const router = useRouter();
  async function handleForm(data: FormSchema) {
    await api.put(`/books/${books.id}`, {
      name: data.name,
      author: data.author,
      review: data.review,
      rating: data.rating,
    });

    return router.push("/books");
  }

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`
                          flex flex-col lg:flex-row 
                          items-center lg:items-start justify-between 
                          w-4/5
                          mx-auto

                          gap-5`}
    >
      {/* container 1 */}
      <div className="flex flex-col w-full lg:w-2/6 gap-5">
        <h1 className="h1 text-center lg:text-left">Editar livro</h1>
        <input
          type="text"
          {...register("name")}
          placeholder="Nome do livro"
          className={`
                        p-3 
                        bg-darkBlue rounded-lg
                        shadow-lg shadow-blue-500/10
                      hover:shadow-blue-500/20 transition-all
                        text-fontWhite
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        `}
        />

        <input
          type="text"
          {...register("author")}
          placeholder="Autor do livro"
          className={`
                        p-3 
                        text-fontWhite
                        bg-darkBlue rounded-lg 
                        hover:shadow-blue-500/20 transition-all
                        shadow-lg shadow-blue-500/10
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        `}
        />
        <textarea
          placeholder="Resenha"
          {...register("review")}
          className={`
                        p-3
                        text-fontWhite
                        bg-darkBlue rounded-lg
                        hover:shadow-blue-500/20 transition-all
                        shadow-lg shadow-blue-500/10
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        min-h-32
                        `}
        />
      </div>

      {/* container 2 */}
      <div className="flex flex-col items-center justify-center lg:w-2/6 mt-8 lg:mt-16 gap-5 lg:mx-0 mx-auto">
        <Stars
          onStarChange={handleStarChange}
          initialIndex={books.rating}
          isClickable={true}
        />
        <input type="hidden" {...register("rating")} />
        <button
          type="submit"
          className={`
                        bg-indigo 
                        shadow-lg shadow-blue-500/20
                        text-fontWhite
                        opacity-85
                        py-3 px-6 
                        rounded-lg 
                        min-w-32 
                        hover:opacity-100 
                        transition-all outline-none
                        `}
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
