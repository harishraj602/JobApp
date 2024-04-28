import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080', // Base URL of your API
    // You can add other Axios configuration options here if needed
  });
  
  export default api;