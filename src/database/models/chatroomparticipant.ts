import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
import ChatRoom from "./chatroom";

class ChatRoomParticipant extends Model {
  public chatRoomParticipantId!: string;
  public chatRoomId!: string;
  public userId!: string;
}

ChatRoomParticipant.init(
  {
    chatRoomParticipantId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    chatRoomId: {
      type: DataTypes.UUID,
      references: {
        model: ChatRoom,
        key: "chatRoomId",
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "userId",
      },
    },
  },
  {
    sequelize,
    modelName: "ChatRoomParticipant",
    tableName: "ChatRoomParticipants",
  }
);

// Associations
ChatRoom.belongsToMany(User, {
  through: ChatRoomParticipant,
  foreignKey: "chatRoomId",
});
User.belongsToMany(ChatRoom, {
  through: ChatRoomParticipant,
  foreignKey: "userId",
});

export default ChatRoomParticipant;
