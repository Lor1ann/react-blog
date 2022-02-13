import axios from "axios";

export const instance = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:5656",
=======
>>>>>>> fb26fd75610eed98d364d6b44259e98e0ffbb2ac
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});
