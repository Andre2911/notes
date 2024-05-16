import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://18.191.181.170:8080',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axiosInstance