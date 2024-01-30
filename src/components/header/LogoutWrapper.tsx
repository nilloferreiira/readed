'use client'
import { Logout } from "@/hooks/auth/Logout"

export function LogoutWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const {handleLogout} = Logout()

    return (
    <button 
    onClick={handleLogout}
    className="block text-customRed" 
    >
        {children}
    </button>

    )
}