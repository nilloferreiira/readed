import { LogoutWrapper } from "../LogoutWrapper"

interface DropDownUserProps {
    name: string,
}

export function DropdownUser(props: DropDownUserProps) {
    return (
        <div className="flex flex-col items-start text-fontWhite animate-fade-in transition-all">
          {props.name}
          <LogoutWrapper>
          <span className="text-customRed hover:text-red-500 cursor-pointer transition-all">Sair</span>
          </LogoutWrapper>
          </div>
    )
}