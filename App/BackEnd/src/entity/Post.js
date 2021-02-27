import { Sequelize, DataTypes, Model } from "sequelize";
// const sequelize = new Sequelize('sqlite::memory');
import User from "./User";
import Address from "./Address";
import PostStatus from "./PostStatus";
import ContractCategories from "./ContractCategories";
class Post extends Model {}

Post.init({
  postId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },

  userId: {
    type: DataTypes.UUIDV4,
    references: {
      // This is a reference to another model
      model: User,
      // This is the column name of the referenced model
      key: "userID",
      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  addressId: {
    type: DataTypes.UUIDV4,
    references: {
      model: Address,
      key: "addressID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  postStatusId: {
    type: DataTypes.UUIDV4,
    references: {
      model: PostStatus,
      key: "postStatusID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  categoryID: {
    type: DataTypes.UUIDV4,
    references: {
      model: ContractCategory,
      key: "categoryID",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  postTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { min: 6, max: 40 },
  },

  postDescription: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { min: 50 },
  },

  setPrice: {
    type: DataTypes.DECIMAL(2),
    allowNull: false,
    validate: { isDecimal },
  },

  budget: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isDecimal },
  },

  postedDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: { isDate },
  },

  visible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  views: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
