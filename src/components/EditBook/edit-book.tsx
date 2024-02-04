'use client'

import { EditBookFormQuery } from "./EditBookFormQuery";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export function EditBook() {
    return (
        <QueryClientProvider client={queryClient}>
            <EditBookFormQuery/>
        </QueryClientProvider>
    )
}