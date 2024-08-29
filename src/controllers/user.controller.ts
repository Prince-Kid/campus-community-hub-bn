import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../database/models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { generateToken } from "../helpers/generateToken";
dotenv.config();
export const welcome = async (req: Request, res: Response) => {
  try {
    res.status(200).send("<h1>Welcome To CCH</h1>");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(401).json({ message: "Please Fill all Fields" });
    }

    if (
      !["admin", "student", "student_leader", "school_leader"].includes(role)
    ) {
      return res.status(401).json({ message: "Invalid Role" });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email Already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role,
    });
    const token = generateToken(createUser);
    res.status(201).json({
      message: "User Registered Successfully ",
      userId: createUser.userId,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "Please Fill all Fields" });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "User Not Found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = await generateToken(user);
    res.status(200).json({ message: "Logged In Successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error ", error });
  }
};
