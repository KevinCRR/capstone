import { DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
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
