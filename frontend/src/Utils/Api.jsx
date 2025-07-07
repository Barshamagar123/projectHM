import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5002/api",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
})


export const get =(url,params) => instance.get(url,{params})
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const deleteUser= (url) => instance.delete(url);


// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Get token from localStorage or Redux store
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Store token if it's in the response
        if (response.data && response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    },
    function (error) {
        // Handle 401 errors (unauthorized)
        if (error.response && error.response.status === 401) {
            // Clear token and redirect to login
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
