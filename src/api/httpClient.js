import axios from "axios";
import { auth } from "../firebase";

const apiVersion = "/v1";

const axiosClient = Object.freeze(
  axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL + apiVersion,
    headers: {
      "Content-Type": "application/json",
    },
  })
);

axiosClient.interceptors.request.use(async (config) => {
  const token = await auth.currentUser?.getIdToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default axiosClient;
