import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
import Blog from "./blog";
class Like extends Model {}
Like.init(
  {
    likeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: "User",
        key: "userId",
      },
    },
    blogId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: "Blog",
        key: "blogId",
      },
    },
  },
  {
    sequelize,
    modelName: "Like",
  }
);

User.hasMany(Like, { foreignKey: "userId" });
Blog.hasMany(Like, { foreignKey: "blogId" });
Like.belongsTo(User, { foreignKey: "userId" });
Like.belongsTo(Blog, { foreignKey: "blogId" });

export default Like;
