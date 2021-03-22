const { DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/sequelize");
// const sequelize = new Sequelize('sqlite::memory');
import Post from "./Post";
import User from "./User";
import BidStatus from "./BidStatus";
class Bids extends Model {}
Bids.init(
    {
        bidID: {
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

        price: {
            type: DataTypes.DECIMAL(2),
            allowNull: false,
            validate: { isEmail: true },
        },

        priceType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true },
        },

        bidStatusID: {
            type: DataTypes.UUID,

            references: {
                model: BidStatus,
                key: "biddStatusID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        createDate: { type: DataTypes.DATE, allowNull: false },

        responseDate: { type: DataTypes.DATE, allowNull: false },
    },
    { sequelize: sequelize }
);

module.exports = Bids;
