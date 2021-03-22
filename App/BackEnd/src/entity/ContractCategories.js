import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
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
