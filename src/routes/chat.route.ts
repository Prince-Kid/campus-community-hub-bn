import express from "express";
import { chatroom } from "../controllers/chatroom.controller";
import { assignParticipantsToChatRooms } from "../controllers/chatroomparticipants.controller";
import { sendMessage } from "../controllers/message.controller";
import { getMessages } from "../controllers/message.controller";
import { verifyAccesToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post("/chatRooms", chatroom);
router.post("/chatRooms/participants", assignParticipantsToChatRooms);
router.post("/chatRooms/messages/:id", verifyAccesToken, sendMessage);
router.get("/chatRooms/messages/:id", getMessages);

export default router;
