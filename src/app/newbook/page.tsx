import { Header } from "@/components/header/Header";

export default function FormBookPage() {
  return (
    <div>
      <Header />

      {/* main content */}
      <div className={`
                      w-4/5 
                      gap-48
                      mx-auto
                      flex flex-col 
                      lg:flex-row
                      items-center lg:items-start justify-between
                    `}>
        {/* container 1 */}
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-3/5 gap-5">
          <h1 className="h1">Novo livro</h1>
          {/* form */}
          <form className="flex flex-col w-full lg:w-3/5 gap-3">
            <input
              type="text"
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
              className={`
                        p-3
                        text-fontWhite
                        bg-darkBlue rounded-lg 
                        placeholder-fontwhite placeholder-opacity-80 placeholder-style
                        outline-none
                        min-h-32
                        `}
            />
          </form>
        </div>

        {/* container 2 */}
        <div className="flex flex-col items-center justify-center lg:w-3/5 mt-8 lg:mt-16 gap-5">
          {/* stars  */}
          <div>
            stars component
          </div>

          <button
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
              `}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
