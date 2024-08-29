import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
import Blog from "./blog";
class Comment extends Model {}
Comment.init(
  {
    commentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "User",
        key: "userId",
      },
    },
    blogId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "Blog",
        key: "blogId",
      },
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

User.hasMany(Comment, { foreignKey: "userId" });
Blog.hasMany(Comment, { foreignKey: "blogId" });
Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Blog, { foreignKey: "blogId" });

export default Comment;
