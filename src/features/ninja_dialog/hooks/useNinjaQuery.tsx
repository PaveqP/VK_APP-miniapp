import { useQuery } from "@tanstack/react-query";
import { requestCatFact } from "../../../shared/api";

export const useNinjaQuery = () => {
    const query = useQuery({
        queryKey: ['fact'],
        queryFn: requestCatFact,
        enabled: false
    })

    return query
}