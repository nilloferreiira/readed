import Link from "next/link";

export function NewBookCard() {
  return (
    <Link
      href={"/books/newbook"}
      className={`
                        bg-indigo/40
                        bg-opacity-80
                        w-80
                        h-48
                        px-6
                        py-3
                        flex
                        flex-col
                        gap-2
                        rounded-lg
                        hover:bg-opacity-50
                        hover:shadow-lg hover:shadow-blue-700/80
                        group
                    `}
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <h1 className="text-xl font-bold text-gray-200/80 flex items-center justify-center gap-2 group-hover:underline">
          Adicionar novo livro
        </h1>
      </div>
    </Link>
  );
}
