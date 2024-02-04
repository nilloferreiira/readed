'use client'

import { DropDown } from "./dropdown/Dropdown";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function User() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <DropDown/>
      </QueryClientProvider>
    </div>
  );
}
