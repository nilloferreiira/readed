import { Header } from "@/components/header/Header";

export default function FormBookPage() {
  return (
    <div>
      <Header />

      {/* main content */}
      <div className="w-4/5 flex flex-col items-center justify-center mx-auto">
        {/* container 1 */}
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <h1 className="h1">Novo livro</h1>
          {/* form */}
          <form className="flex flex-col w-full gap-3">
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
                        resize-none
                        min-h-32
                        `}
            />
          </form>
        </div>

        {/* container 2 */}
        <div></div>
      </div>
    </div>
  );
}
