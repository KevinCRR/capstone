import { Sequelize, DataTypes, Model } from "sequelize";

class UserStatus extends Model {}
UserStatus.init({
  userStatusID: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },

  status: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isEmail: true },
  },

});