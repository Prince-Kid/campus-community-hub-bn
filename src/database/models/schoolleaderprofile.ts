import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user";
class SchoolLeaderProfile extends Model {
  school_leader_id!: string;
  position!: string;
  bio!: string;
}

SchoolLeaderProfile.init(
  {
    schoolLeaderId: {
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
    tableName: "SchoolLeaderProfiles",
  }
);

User.hasOne(SchoolLeaderProfile, { foreignKey: "schoolLeaderId" });
SchoolLeaderProfile.belongsTo(User, { foreignKey: "schoolLeaderId" });

export default SchoolLeaderProfile;
