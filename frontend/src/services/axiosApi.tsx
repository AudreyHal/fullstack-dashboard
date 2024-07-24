import axios from "axios";
import { getToken } from "../utilities/Auth";

const token = getToken();

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token ? token : ""}`,
    },
  });
  

export default axiosInstance