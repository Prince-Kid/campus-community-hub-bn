import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";

class Announcement extends Model {
  announcementId!: String;
  authorId!: String;
  content!: String;
}
Announcement.init(
  {
    announcementId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    authorId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: "User",
        key: "userId",
      },
    },
    content: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Announcement",
  }
);

User.hasMany(Announcement, { foreignKey: "authorId" });
Announcement.belongsTo(User, { foreignKey: "authorId" });

export default Announcement;
