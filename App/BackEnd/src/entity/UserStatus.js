import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
export default class UserStatus extends Model {}
UserStatus.init(
    {
        userStatusID: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },

        status: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: { isEmail: true },
        },
    },
    { sequelize: sequelize }
);
