import axios from "axios";

const axiosFetch = axios.create({
    baseURL: import.meta.env.API_URL,
    withCredentials: true
});

export default axiosFetch;