import Product from "../models/Product.js";

// get all pizzas
export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Product.find();
    return res.status(200).json(pizzas);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// get pizza by id
export const getPizzaById = async (req, res) => {
  try {
    const { id } = req.params;
    const findPizza = await Product.findById(id);
    return res.status(200).json(findPizza);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
