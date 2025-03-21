import axios from "axios";
const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})


export default http;
