import { Sequelize, DataTypes, Model } from "sequelize";

class PostStatus extends Model {}
PostStatus.init({
  postStatusID: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
});
