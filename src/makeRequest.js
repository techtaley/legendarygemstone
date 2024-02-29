import axios from "axios";

export const makeRequest = axios.create({
    baseURL:  import.meta.env.VITE_PRODUCTION_API_URL,  
    //baseURL:  import.meta.env.VITE_DEVELOPMENT_API_URL,      
})
