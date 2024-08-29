import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
class StudentProfile extends Model {
  public studentId!: string;
  public userId!: string;
  public rollNumber!: string;
  public major!: string;
  public class!: string;
  public department!: string;
}

StudentProfile.init(
  {
    studentId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "userId",
      },
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    rollNumber: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    major: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    class: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    department: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "StudentProfiles",
  }
);

User.hasOne(StudentProfile, { foreignKey: "studentId" });
StudentProfile.belongsTo(User, { foreignKey: "studentId" });

export default StudentProfile;
