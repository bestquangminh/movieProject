import { apiConfig } from "./apiConfig";
import axios from "axios";
import queryString from "query-string";
export const axiosClient = axios.create({ //* This is an instance
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
});