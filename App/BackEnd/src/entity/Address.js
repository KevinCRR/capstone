import { DataTypes, Model } from "sequelize";

class Address extends Model {}
Address.init({
  addressId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
});
