import axios from "./axios";
import { AxiosRequestConfig } from "axios"; //type for request's config options

/**
 * This method is used to make HTTP GET request using Axios library.
 */
export const get = async (url: string, config?: AxiosRequestConfig) => {
  try {
    return {
      response: await axios.get(url, config),
      error: null,
    };
  } catch (err) {
    return {
      response: null,
      error: err,
    };
  }
};

/**
 * This method is used to make HTTP POST request using Axios library.
 */
export const post = async (
  url: string,
  data: object,
  config?: AxiosRequestConfig
) => {
  try {
    return {
      response: await axios.post(url, data, config),
      error: null,
    };
  } catch (err) {
    return {
      response: null,
      error: err,
    };
  }
};

/**
 * This method is used to make HTTP PUT request using Axios library.
 */
export const put = async (
  url: string,
  data: object,
  config?: AxiosRequestConfig
) => {
  try {
    return {
      response: await axios.put(url, data, config),
      error: null,
    };
  } catch (err) {
    return {
      response: null,
      error: err,
    };
  }
};

/**
 * This method is used to make HTTP DELETE request using Axios library.
 */
export const del = async (url: string, config?: AxiosRequestConfig) => {
  try {
    return {
      response: await axios.delete(url, config),
      error: null,
    };
  } catch (err) {
    return {
      response: null,
      error: err,
    };
  }
};
