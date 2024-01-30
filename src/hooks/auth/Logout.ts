import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await googleLogout();
      Cookies.remove('token', {path: '/'})

      return router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { handleLogout };
}
