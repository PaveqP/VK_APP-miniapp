import axios from "axios"
import { IPerson } from "./types"
export const requestPersonInfo = async (name: string, signal: AbortSignal): Promise<IPerson> => {
    try {
        const response = await axios.get(`https://api.agify.io/`,{
            params: {name: name},
            signal
        })
        return response.data
    } catch (error) {
        throw error
    }
}