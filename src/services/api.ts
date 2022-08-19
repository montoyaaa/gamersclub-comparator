import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

// Just for add delay
api.interceptors.request.use(
  function (request) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve(request);
      }, 1500);
    });
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
