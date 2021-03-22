const { DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/sequelize");
export default class PostStatus extends Model {}
PostStatus.init(
    {
        postStatusID: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
    },
    { sequelize: sequelize }
);
