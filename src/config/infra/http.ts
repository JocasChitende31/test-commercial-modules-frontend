import axios from "axios";

const host = window.location.hostname

const subdomain = host.split('.')[0]
const domain = 'orbita-tech.com'
const http = axios.create({
  // baseURL: import.meta.env.VITE_BACKEND_URL,
  baseURL: `http://${subdomain}.orbita-tech.com:3333`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

http.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export default http;
