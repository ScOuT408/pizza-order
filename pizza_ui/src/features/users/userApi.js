import axios from "axios";

export const register = (formData) =>
  axios.post("https://api-pizza-five.vercel.app/api/users/register", formData);

export const login = (formData) =>
  axios.post("https://api-pizza-five.vercel.app/api/users/login", formData);

