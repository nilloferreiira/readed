import { BooksGrid } from "./BooksGrid";
import { NewBook } from "./NewBook";

export function Main() {
  return (
    <main
      className={`
                    lg:mx-40 mx-10 
                    flex flex-col 
                    items-center lg:items-start
             
                    gap-8
                    lg:gap-12
                `}
    >
      <div className="flex flex-col gap-6 lg:gap-12 items-center lg:items-start justify-center">
        <NewBook />
        <h1 className="font-bold text-5xl text-fontWhite opacity-80">
          Suas leituras
        </h1>
      </div>

      {/* GridBooks  */}
      <div className="flex items-center justify-items-center mx-auto lg:ml-16">
      <BooksGrid />
      </div>
    </main>
  );
}
