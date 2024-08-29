import { Model, DataTypes } from "sequelize";
import sequelize from "../config//db.config";

class User extends Model {
  public userId!: string;
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public profilePicture!: string;
  public password!: string;
  public role!: "admin" | "student" | "student_leader" | "school_leader";
  public resetPasswordToken!: string;
  public resetPasswordExpires!: Date;
}

User.init(
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(
        "admin",
        "student",
        "student_leader",
        "school_leader"
      ),
      allowNull: false,
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Users",
    timestamps: true,
  }
);

export default User;
