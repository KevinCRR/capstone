import { DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
export default class Address extends Model {}
Address.init(
    {
        addressId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    },
    { sequelize: sequelize }
);
