export function NewBook() {
  return (
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
              `}
    >
      Novo livro
    </button>
  );
}
