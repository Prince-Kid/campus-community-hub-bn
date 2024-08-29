import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
class StudentLeaderProfile extends Model {
  public student_leader_id!: string;
  public position!: string;
  public bio!: string;
}

StudentLeaderProfile.init(
  {
    studentLeaderId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: User,
        key: "userId",
      },
    },

    position: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "StudentLeaderProfiles",
  }
);

User.hasOne(StudentLeaderProfile, { foreignKey: "studentLeaderId" });
StudentLeaderProfile.belongsTo(User, { foreignKey: "studentLeaderId" });

export default StudentLeaderProfile;
