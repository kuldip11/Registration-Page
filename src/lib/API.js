import axios from 'axios';

const baseURL = 'https://wordpress.betadelivery.com/interview/api'

const userApi = axios.create({ baseURL: baseURL })

userApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {
    userApi
}