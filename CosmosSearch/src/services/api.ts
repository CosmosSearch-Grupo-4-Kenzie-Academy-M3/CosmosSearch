import axios from "axios";

export const api = axios.create({
  baseURL: "https://cosmossearch-api-fake.onrender.com",
  // baseURL: "http://localhost:3001",
  timeout: 8000,
});
