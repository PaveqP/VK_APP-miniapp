import { IData } from "./types"
import axios from "axios"
export const requestCatFact = async (): Promise<IData> => {
    try {
        const response = await axios.get('https://catfact.ninja/fact')
        return response.data
    } catch (error) {
        throw error
    }
}