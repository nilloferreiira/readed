"use client";

import { z } from "zod";
import Cookies from "js-cookie";
import { api } from "@/lib/api";
import { Stars } from "./Stars";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2),
  author: z.string(),
  review: z.string(),
  rating: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function NewBookForm() {
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: "0",
    },
  });

  const handleStarChange = (index: any) => {
    if (index == undefined) {
      setValue("rating", "0");
    } else {
      setValue("rating", index.toString());
    }
  };

  const token = Cookies.get('token')

  //envio do formulario
  async function handleForm(data: FormSchema) {
    try {
      await api.post("/books", {
        name: data.name,
        author: data.author,
        review: data.review,
        rating: data.rating,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      toast.success('Livro adicionado com sucesso!')
  
      return router.push("/books");

    } catch {
      toast.error('Erro ao adicionar o livro!')
    }
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
        <h1 className="h1 text-center lg:text-left">Novo livro</h1>
        <input
          type="text"
          {...register("name")}
          placeholder="Nome do livro"
          className={`
                        p-3 
                        bg-darkBlue 
                        hover:shadow-blue-500/20 transition-all
                        shadow-lg shadow-blue-500/10
                        text-fontWhite
                        rounded-lg
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
        <Stars onStarChange={handleStarChange} isClickable={true} />
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
          Adicionar
        </button>
      </div>
    </form>
  );
}
