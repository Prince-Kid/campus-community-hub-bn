import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
class Blog extends Model {
  blogId!: string;
  authorId!: string;
  content!: string;
  cover!: string;
  blogTitle!: string;
}
Blog.init(
  {
    blogId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    authorId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "Users",
        key: "userId",
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogTitle: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Blog",
  }
);

User.hasMany(Blog, { foreignKey: "authorId" });
Blog.belongsTo(User, { foreignKey: "authorId" });

export default Blog;
