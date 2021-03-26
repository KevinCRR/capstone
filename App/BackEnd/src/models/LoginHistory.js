import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = require("../constants/sequelize");
// const sequelize = new Sequelize('sqlite::memory');
const sequelize = require("../constants/sequelize");
import User from "./User";
export default class LoginHistory extends Model {}
LoginHistory.init(
    {
        loginID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        userID: {
            type: DataTypes.UUID,

            references: {
                model: User,
                key: "userID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        date: { type: DataTypes.DATE, allowNull: false },
    },
    { sequelize: sequelize }
);
