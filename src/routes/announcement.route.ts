import express from "express";
import { verifyAccesToken } from "../middlewares/verifyToken";
import { checkRole } from "../middlewares/checkRole";
import {
  allAnnouncement,
  announcement,
  getAnnouncement,
} from "../controllers/announcement.controller";
const route = express.Router();

route.post(
  "/",
  verifyAccesToken,
  checkRole(["admin", "stdent_leader", "school_leader"]),
  announcement
);
route.get("/get/:id", getAnnouncement);
route.get("/all", allAnnouncement);

export default route;
