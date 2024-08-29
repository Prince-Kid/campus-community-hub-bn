import express from "express";
import {
  allBlog,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller";
import { checkRole } from "../middlewares/checkRole";
import { verifyAccesToken } from "../middlewares/verifyToken";
const route = express.Router();

route.post(
  "/create",
  verifyAccesToken,
  checkRole(["admin", "student_leader", "school_leader"]),
  createBlog
);
route.get("/getBlog/:id", getBlog);
route.get("/allBlog", allBlog);
route.put("/updateBlog/:id", verifyAccesToken, updateBlog);
route.delete("/deleteBlog/:id", verifyAccesToken, deleteBlog);
export default route;
