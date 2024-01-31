import { getUser } from "@/lib/auth";
import { DropDown } from "./dropdown/Dropdown";

export default function User() {
  const { name, picture } = getUser();

  return (
    <div>
      <DropDown name={name} picture={picture} />
    </div>
  );
}
