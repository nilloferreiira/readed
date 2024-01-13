import { Logo } from "../logo";
import User from "./User";

export function Header() {
    return (
        <header className="flex justify-between items-center p-8">
        <Logo />
        <User />
      </header>
    )
}