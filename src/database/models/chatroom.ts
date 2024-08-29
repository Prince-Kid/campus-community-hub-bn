import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";

class ChatRoom extends Model {
  public chatRoomId!: string;
  public name!: string;
  public type!: string; // 'leaders' or 'general'
}

ChatRoom.init(
  {
    chatRoomId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("leaders", "general"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ChatRoom",
    tableName: "ChatRooms",
  }
);

export default ChatRoom;
