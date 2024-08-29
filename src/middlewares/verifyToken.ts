import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyAccesToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.header("authorization");
  if (!bearerToken) {
    return res.status(401).json({ message: "No token Found" });
  }
  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res.status(401).json({ meassage: "No Token Found" });
  }
  jwt.verify(token, "ulkgisenyi", (error: any, decoded: any) => {
    if (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ message: "Expired Token" });
      }
      if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      return res.status(500).json({ message: "Internal Server Error", error });
    }

    (req as any).user = decoded;
    next();
  });
};
