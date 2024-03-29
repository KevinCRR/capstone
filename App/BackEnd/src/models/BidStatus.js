import { DataTypes, Model } from "sequelize";
const sequelize = require("../constants/sequelize");
export default class BidStatus extends Model {}
BidStatus.init(
    {
        BidStatusId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true },
        },
    },
    { sequelize: sequelize }
);
