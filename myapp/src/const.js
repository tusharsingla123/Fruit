import axios from "axios";

export const BASE_URL = "https://fruit-backend-gr3m.vercel.app";
export const instance = axios.create({
  baseURL: BASE_URL,
});
