import express from "express";
import { getPizzaById, getPizzas } from "../controllers/productController.js";
const router = express.Router();

router.get("/all", getPizzas);
router.get("/:id", getPizzaById);

export default router;
