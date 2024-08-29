import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
import ChatRoom from "./chatroom";

class Message extends Model {
  public messageId!: string;
  public content!: string;
  public userId!: string;
  public imageUrl?: any;
  public chatRoomId!: string;
}

Message.init(
  {
    messageId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "userId",
      },
    },
    imageUrl: { type: DataTypes.JSONB, allowNull: true },
    chatRoomId: {
      type: DataTypes.UUID,
      references: {
        model: ChatRoom,
        key: "chatRoomId",
      },
    },
  },
  {
    sequelize,
    modelName: "Message",
    tableName: "Messages",
  }
);

// Associations
User.hasMany(Message, { foreignKey: "userId" });
Message.belongsTo(User, { foreignKey: "userId" });

ChatRoom.hasMany(Message, { foreignKey: "chatRoomId" });
Message.belongsTo(ChatRoom, { foreignKey: "chatRoomId" });

export default Message;
