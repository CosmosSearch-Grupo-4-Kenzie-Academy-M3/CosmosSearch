import axios from "axios";

export const api = axios.create({
    baseURL: "https://cosmossearch-api-fake.onrender.com",
    timeout: 8000
})