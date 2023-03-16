import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  try {
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
      return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name,
      email,
      password: hashPassword,
    });
    if (result) return res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });

    if (!findUser) return res.status(404).json({ message: "User Not Found" });

    const isMatch = await bcrypt.compare(req.body.password, findUser.password);

    if (!isMatch)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SEC, {
      expiresIn: "1d",
    });

    const { password, ...others } = findUser._doc;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
