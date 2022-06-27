import axios, { AxiosRequestConfig } from "axios";
import { SERVER_URL } from "../constants";
import {
  requestHandler,
  successResponseHandler,
  errorResponseHandler,
} from "./interceptors";

const ContentType = {
  json :'application/json',
  multipart :'multipart/form-data',
}
const getAxiosInstance = (
  config: AxiosRequestConfig = {
    headers: { contentType: ContentType.json },
  }
) => {
  const instance = axios.create({
    baseURL: SERVER_URL + "api",
    headers: {
      "Content-Type":  ContentType.json,
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};

export default getAxiosInstance();
