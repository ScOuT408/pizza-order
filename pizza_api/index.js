import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import seedRouter from "./routes/seedRoute.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use("/", (req, res) => {
  res.send("Hello")
});

// http://localhost:5000/
// routes
app.use("/api/seed", seedRouter);
app.use("/api/users", userRoute);
app.use("/api/pizzas", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running On ${process.env.PORT}`);
});
