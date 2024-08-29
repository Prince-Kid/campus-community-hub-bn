import jwt from "jsonwebtoken";
import User from "../database/models/user";

export const generateToken = async (userData: User) => {
  return jwt.sign(
    {
      role: userData.role,
      email: userData.email,
      id: userData.userId,
      password: userData.password,
    },
    "ulkgisenyi",
    {
      expiresIn: "1d",
    }
  );
};
