import { Request, Response } from "express";
import ChatRoom from "../database/models/chatroom";

export const chatroom = async (req: Request, res: Response) => {
  try {
    const leadersChatRoom = await ChatRoom.create({
      name: "Leaders Chat Room",
      type: "leaders",
    });

    const generalChatRoom = await ChatRoom.create({
      name: "General Chat Room",
      type: "general",
    });

    return res.status(201).json({ leadersChatRoom, generalChatRoom });
  } catch (error) {
    return res.status(500).json(error);
  }
};
