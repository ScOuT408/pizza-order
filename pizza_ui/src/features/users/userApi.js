import axios from "axios";

export const register = (formData) =>
  axios.post("api/users/register", formData);

export const login = (formData) => axios.post("api/users/login", formData);
