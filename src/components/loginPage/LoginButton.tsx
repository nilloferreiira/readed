import Link from "next/link";

export function LoginButton() {
  return (
    <Link href={'/books'} className={`
                        rounded-lg border border-indigo border-opacity-75 
                        bg-opacity-10 bg-indigo shadow-lg shadow-blue-500/20 
                        p-2
                        hover:bg-opacity-20 transition-all
                        outline-none
                        `}>
      Entrar com o google
    </Link>
  );
}
