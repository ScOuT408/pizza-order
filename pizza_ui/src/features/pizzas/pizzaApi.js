import axios from "axios";

export const getPizzas = () => axios.get("api/pizzas/all");
// export const getPizzaById = (id) => axios.get(`api/pizzas/${id}`);
