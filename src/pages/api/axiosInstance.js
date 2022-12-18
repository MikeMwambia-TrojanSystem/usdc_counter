//Export instance of axios
import axios from "axios";

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

const AxiosInstance = axios.create({
  baseURL: apiEndpoint,
  timeout: 1000,
  //Add headers etc
});

export default AxiosInstance;
