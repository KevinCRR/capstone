import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
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
