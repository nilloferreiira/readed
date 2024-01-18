import type { Metadata } from "next";
import { Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";
import { BookProvider } from "@/context/BookProvider";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Read.ed",
  description: "An application to organize your readings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-bg text-fontWhite`}>
        <div
          className={`
            relative h-screen overflow-x-hidden z-50 
            scrollbar-none
        `}
          // caso eu mude de ideia sobre a scroll bar
          // scrollbar-thumb-rounded-full scrollbar-h-3 scrollbar-w-2 scrollbar-thumb-blue-950
        >
          <div
            className={`
                        absolute 
                        top-1/4
                        w-[655px] h-[335px]
                        rounded-t-full
                        lg:right-[35%]
                        -right-28
                        
                        sm:w-[655px] sm:h-[355px]
                        sm:rounded-t-full
                        
                        bg-indigo
                        lg:translate-y-3/4
                        translate-y-full
                        blur-full
                        `}
          />
          
          {children}
        </div>
      </body>
    </html>
  );
}
