import axios from "axios";

export const getPizzas = () => axios.get("https://api-pizza-five.vercel.app/api/pizzas/all");
// export const getPizzaById = (id) => axios.get(`api/pizzas/${id}`);
