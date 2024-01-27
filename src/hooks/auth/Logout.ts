import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await googleLogout();
      return router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { handleLogout };
}
