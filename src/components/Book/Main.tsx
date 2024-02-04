'use client'

import { QueryClientProvider } from "@tanstack/react-query";
import { BookPage } from "./book-page";
import { queryClient } from "@/lib/react-query";

export function Main() {
    return (
        <QueryClientProvider client={queryClient}>
            <BookPage />
        </QueryClientProvider>
    )
}