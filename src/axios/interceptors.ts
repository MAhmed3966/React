import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { TOKEN, AUTH_TOKEN_HEADER, COOKIE_HEADER } from '../constants'
import { getCookie } from "../utils";

export const requestHandler = (request: AxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN) || sessionStorage.getItem(TOKEN);
    if(token) {
        request.headers[AUTH_TOKEN_HEADER] = 'Bearer '+`${token}`;
        request.headers[COOKIE_HEADER] = '__suid__= '+getCookie('__suid__');
    }
    return request;
}

export const successResponseHandler = (response: AxiosResponse) => {
    return {
        ...response,
        data: response.data,
    }
}

export const errorResponseHandler = (error: AxiosError) => {
    return Promise.reject(error);
}
