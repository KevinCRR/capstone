const { DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/sequelize");
// const sequelize = new Sequelize('sqlite::memory');
import Post from "./Post";
import User from "./User";
export default class Favourites extends Model {}
Favourites.init(
    {
        favouriteID: {
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

        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: { isEmail: true },
        },

        date: { type: DataTypes.DATE, allowNull: false },
    },
    { sequelize: sequelize }
);
