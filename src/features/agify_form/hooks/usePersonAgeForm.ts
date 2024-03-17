import { schema } from "../lib";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"

export const usePersonAgeForm = () => {
    return useForm({
        defaultValues: {
            name: '',
        },
        resolver: yupResolver(schema)
    })
}