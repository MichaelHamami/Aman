import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchCalls = () => API.get("/call");
export const createCall = (newCall) => API.post("/call", newCall);
