import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.10.2:3333/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        await AsyncStorage.multiRemove(["@app:token", "@app:user"]);
      }
      return Promise.reject(error.response);
    }

    return Promise.reject(error);
  }
);

export default api;
