import express, { Router } from "express";
import { login, welcome } from "../controllers/user.controller";
import { registerUser } from "../controllers/user.controller";
import { studentProfile } from "../controllers/student.controller";
import { studentLeaderProfile } from "../controllers/studentLeader.controller";
import { schoolLeaderProfile } from "../controllers/schoolLeader.controller";
import { verifyAccesToken } from "../middlewares/verifyToken";
import { checkRole } from "../middlewares/checkRole";
const route = express.Router();

route.get("/", welcome);
route.post("/registerUser", registerUser);
route.post("/studentProfile/:id", studentProfile);
route.post("/studentLeaderProfile/:id", studentLeaderProfile);
route.post("/schoolLeaderProfile/:id", schoolLeaderProfile);
route.post("/login", login);
export default route;
