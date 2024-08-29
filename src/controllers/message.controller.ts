import { Request, Response } from "express";
import Message from "../database/models/message";
import User from "../database/models/user";
import ChatRoomParticipant from "../database/models/chatroomparticipant";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const chatRoomId = req.params.id;
    const { content, imageUrl } = req.body;
    const userId = (req as any).user.id;

    // Check if the user is a participant of the chat room
    const isParticipant = await ChatRoomParticipant.findOne({
      where: { chatRoomId, userId },
    });

    if (!isParticipant) {
      return res
        .status(403)
        .json({ message: "User not a participant of this chat room" });
    }

    const message = await Message.create({
      chatRoomId,
      content,
      userId,
      imageUrl,
    });

    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const chatRoomId = req.params.id;

    // Fetch all messages from the specified chat room
    const messages = await Message.findAll({
      where: { chatRoomId },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname"],
        },
      ],
    });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
