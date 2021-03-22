import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../constants/sequelize";
// const sequelize = new Sequelize('sqlite::memory');
import Post from "./Post";
import User from "./User";
import ContractCategories from "./ContractCategories";
export default class Contract extends Model {}
Contract.init(
    {
        contractID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        userID: {
            type: DataTypes.UUID,

            references: {
                model: User,
                key: "userID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        postID: {
            type: DataTypes.UUID,

            references: {
                model: Post,
                key: "postID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        contractID: {
            type: DataTypes.UUID,

            references: {
                model: ContractCategories,
                key: "postID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        dateStart: { type: DataTypes.DATE, allowNull: false },

        dateEnd: { type: DataTypes.DATE, allowNull: false },
    },
    { sequelize: sequelize }
);
