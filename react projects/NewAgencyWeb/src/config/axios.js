import axios from "axios";
const api = axios.create({
  baseURL :'https://newsapi.org/v2',
  timeout : 5000, //m/s
})

export default api;