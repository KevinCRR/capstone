import { Sequelize, DataTypes, Model } from "sequelize";

class ContractCategory extends Model {}
ContractCategory.init({
  categoryId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
});
