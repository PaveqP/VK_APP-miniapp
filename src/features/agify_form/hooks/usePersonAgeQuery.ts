import { useQuery } from "@tanstack/react-query";
import { requestPersonInfo } from '../../../shared/api'

export const usePersonAgeQuery = (name: string) => {
    const query = useQuery({
        queryKey: ['person', name],
        queryFn: ({queryKey, signal}) => requestPersonInfo(queryKey[1], signal),
        enabled: false
    })

    return query
}