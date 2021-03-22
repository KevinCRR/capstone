const { DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/sequelize");
export default class ContractCategory extends Model {}
ContractCategory.init(
    {
        categoryId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
    },
    { sequelize: sequelize }
);
