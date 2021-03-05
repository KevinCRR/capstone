import { DataTypes, Model } from "sequelize";

class Review extends Model {}
Review.init({
  reviewId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },

  contractId: {
    type: DataTypes.UUIDV4,

    references: {
      model: Contract,
      key: "contractId",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  userId: {
    type: DataTypes.UUIDV4,
    references: {
      model: User,
      key: "userID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },


  comment: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { min: 50 },
  },

  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});