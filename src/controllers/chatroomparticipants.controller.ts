import ChatRoomParticipant from "../database/models/chatroomparticipant";
import User from "../database/models/user";
import ChatRoom from "../database/models/chatroom";
import { Request, Response } from "express";
export const assignParticipantsToChatRooms = async (
  req: Request,
  res: Response
) => {
  try {
    // Fetch the chat rooms
    const leadersChatRoom = await ChatRoom.findOne({
      where: { type: "leaders" },
    });
    const generalChatRoom = await ChatRoom.findOne({
      where: { type: "general" },
    });

    if (!leadersChatRoom || !generalChatRoom) {
      return res.status(404).json({ message: "Chat rooms not found" });
    }

    // Fetch all users
    const users = await User.findAll();

    // Iterate through each user and assign them to the appropriate chat room
    for (const user of users) {
      if (
        user.role === "student_leader" ||
        user.role === "school_leader" ||
        user.role === "admin"
      ) {
        await ChatRoomParticipant.create({
          chatRoomId: leadersChatRoom.chatRoomId,
          userId: user.userId,
        });
      }

      // Assign all users to the general chat room
      await ChatRoomParticipant.create({
        chatRoomId: generalChatRoom.chatRoomId,
        userId: user.userId,
      });
    }

    return res
      .status(200)
      .json({ message: "Participants assigned to chat rooms successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
