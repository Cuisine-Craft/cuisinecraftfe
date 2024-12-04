import axios from 'axios';

// Configure Axios for API calls
const api = axios.create({
    baseURL: 'http://localhost:8080', // Change to your backend URL
});

export default api;
