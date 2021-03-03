import { Sequelize, DataTypes, Model } from "sequelize";
// const sequelize = new Sequelize('sqlite::memory');
import User from "./User";
export default class LoginHistory extends Model {}
LoginHistory.init({
  loginID: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  userID: {
    type: DataTypes.UUIDV4,

    references: {
      model: User,
      key: "userID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  date: { type: DataTypes.DATE, allowNull: false },
});
