import { Sequelize, DataTypes, Model } from "sequelize";
// const sequelize = new Sequelize('sqlite::memory');
import Post from "./Post";
import User from "./User";
export default class Favourites extends Model {}
Favourites.init({
  favouriteID: {
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

  postID: {
    type: DataTypes.UUIDV4,

    references: {
      model: Post,
      key: "postID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: { isEmail: true },
  },

  date: { type: DataTypes.DATE, allowNull: false },
});
