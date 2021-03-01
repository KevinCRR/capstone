import { DataTypes, Model } from "sequelize";

class BidStatus extends Model {}
BidStatus.init({
  BidStatusId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
});