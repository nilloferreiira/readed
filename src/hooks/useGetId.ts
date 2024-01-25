import { useParams } from "next/navigation";

export function useGetId() {
    const params = useParams()

    let id = params.id

    return { id }
}