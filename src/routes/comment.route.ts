import express from "express";
import { comment, getComment } from "../controllers/comment.controller";
import { verifyAccesToken } from "../middlewares/verifyToken";

const route = express.Router();

route.post("/:id", verifyAccesToken, comment);
route.get("/all/:id", verifyAccesToken, getComment);

export default route;
