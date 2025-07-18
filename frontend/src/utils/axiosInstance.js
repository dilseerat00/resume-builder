import axios from 'axios';
import {BASE_URL} from './apiPath';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Set timeout to 10 seconds
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle response error
        if (error.response ) {
            if( error.response.status === 401) {
                window.location.href = '/'; // Adjust the path as needed
            }
            else if (error.response.status === 500) {
                console.error('Server error - please try again later');
            }
        }
        else if(error.code === 'ECONNABORTED'){
                console.error('Request timed out - please try again later');
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;



  
