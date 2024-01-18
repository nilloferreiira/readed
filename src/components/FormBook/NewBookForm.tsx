"use client";

import { Stars } from "./Stars";
import { FormEvent, useEffect, useState } from "react";

export function NewBookForm() {
  const [selectedStar, setSelectedStar] = useState<number | undefined>();
  
  if (selectedStar == undefined) {
    setSelectedStar(0)
  }

  const handleStarChange = (index: any) => {
    setSelectedStar(index)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.append("activeIndex", String(selectedStar));

    console.log(Array.from(formData.entries()))
  }

  return (
    <form onSubmit={handleSubmit}
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
          name="name"
          placeholder="Nome do livro"
          className={`
                        p-3 
                        bg-darkBlue rounded-lg
                        text-fontWhite
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        `}
        />

        <input
          type="text"
          name="author"
          placeholder="Autor do livro"
          className={`
                        p-3 
                        text-fontWhite
                        bg-darkBlue rounded-lg 
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        `}
        />
        <textarea
          placeholder="Resenha"
          name="review"
          className={`
                        p-3
                        text-fontWhite
                        bg-darkBlue rounded-lg 
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        min-h-32
                        `}
        />
      </div>

      {/* container 2 */}
      <div className="flex flex-col items-center justify-center lg:w-2/6 mt-8 lg:mt-16 gap-5 lg:mx-0 mx-auto">
        <Stars onStarChange={handleStarChange} />
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
