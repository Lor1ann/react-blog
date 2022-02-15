import axios from "axios";

export const instance = axios.create({
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});
