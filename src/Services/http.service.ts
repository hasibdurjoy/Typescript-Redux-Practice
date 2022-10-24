import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  headers: { "X-Custom-Header": "foobar" },
};
const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url);
  }
  async post(url: string, body: object): Promise<AxiosResponse> {
    return instance.post(url, body);
  }
  async update(url: string, body: object): Promise<AxiosResponse> {
    return instance.patch(url, body);
  }
  async delete(url: string): Promise<AxiosResponse> {
    return instance.delete(url);
  }
}

const httpReq = new Request();

export default httpReq;
