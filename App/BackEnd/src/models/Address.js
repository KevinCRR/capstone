const { DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/sequelize");
export default class Address extends Model {}
Address.init(
    {
        addressId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    },
    { sequelize: sequelize }
);
