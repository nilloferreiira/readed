// 'use client'

// import { useGetId } from "@/hooks/useGetId";
// import { api } from "@/lib/api";
// import { BookProps } from "@/utils/bookInterface";
// import { useQuery } from "@tanstack/react-query";
// import { Stars } from "../FormBook/Stars";
// import { Footer } from "./Footer";
// import Cookies from "js-cookie";


// export function BookPage() {
//     const { id } = useGetId();

//     async function getBooks() {
//       let booksResponse: BookProps[] = [];
//       const token = Cookies.get('token')
  
//       try {
//         const response = await api.get("/books", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
    
//         booksResponse = response.data.books;
//         if (!Array.isArray(response.data)) {
//           throw new Error("Data is not an array!");
//         }
//       } catch {
//         console.log("Erro na requisição do booksgrid");
//       }
  
  
//       return booksResponse
//     }
    
  
//     const { data: books } = useQuery({
//       queryKey: ['books'],
//       queryFn: getBooks,
//     })
  
    
    
//     // const foundBook = props.books.find((item) => item.id === id);
//     const foundBook = books?.find((item) => item.id === id);
    
    
//     // let book: BookProps;
//     // if (foundBook) {
//     //   book = foundBook;
//     // } else {
//     //   throw new Error("Book not found");
//     // }
  
  

//     return (
//         <div>

//             {books && (
//             {/* first container  */}
//               <div
//                className={`
//                           w-full
//                           flex 
//                           flex-col lg:flex-row 
//                           items-start
//                           justify-center lg:justify-between
//                           `}
//             >
//             <div className="flex flex-col gap-2 mb-2 lg:mb-0">
//                 <h1 className="font-bold text-4xl text-fontWhite opacity-80 lg:h1">
//                   {books.name}
//                 </h1>
//                 <h2 className="font-normal text-base text-fontWhite">
//                   {book.author}
//                 </h2>
//               </div>
//               <span className="-ml-2">
//                 <Stars initialIndex={book.rating} isClickable={false} />
//               </span>
      
//             <hr className="w-full block" />
      
//             {/* second container  */}
//             <div className="flex flex-col gap-5">
//               <h1 className="font-bold text-2xl text-fontWhite">Resenha</h1>
      
//               <p className="text-fontWhite opacity-70 text-xl">{book.review}</p>
//             </div>

//             </div>
                
//             {/* footer  */}
//             <Footer id={id} />
//             )}
//         <div/>
//     )
   
// }


'use client';

import { useGetId } from "@/hooks/useGetId";
import { api } from "@/lib/api";
import { BookProps } from "@/utils/bookInterface";
import { useQuery } from "@tanstack/react-query";
import { Stars } from "../FormBook/Stars";
import { Footer } from "./Footer";
import Cookies from "js-cookie";

export function BookPage() {
  const { id } = useGetId();

  async function getBooks() {
    let booksResponse: BookProps[] = [];
    const token = Cookies.get('token');

    try {
      const response = await api.get("/books", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      booksResponse = response.data.books;
      if (!Array.isArray(response.data.books)) {
        throw new Error("Data is not an array!");
      }
    } catch (error) {
      console.log("Erro na requisição do booksgrid", error);
    }

    return booksResponse;
  }

  const { data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  const foundBook = books?.find((item) => item.id === id);

//   if (!foundBook) {
//     throw new Error("Book not found");
//   }

  return (
    <div>
      {books && books.map((book: any) => (
        <div
          className={`
            w-full
            flex 
            flex-col lg:flex-row 
            items-start
            justify-center lg:justify-between
          `}
        >
          <div className="flex flex-col gap-2 mb-2 lg:mb-0">
            <h1 className="font-bold text-4xl text-fontWhite opacity-80 lg:h1">
              {book.name}
            </h1>
            <h2 className="font-normal text-base text-fontWhite">
              {book.author}
            </h2>
          </div>
          <span className="-ml-2">
            <Stars initialIndex={book.rating} isClickable={false} />
          </span>

          <hr className="w-full block" />

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl text-fontWhite">Resenha</h1>
            <p className="text-fontWhite opacity-70 text-xl">{book.review}</p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <Footer id={id} />
    </div>
  );
}
