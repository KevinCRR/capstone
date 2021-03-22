const { DataTypes, Model } = require("sequelize"); // const sequelize = new Sequelize('sqlite::memory');
import Address from "./Address";
const sequelize = require("../constants/sequelize");
export default class User extends Model {}
User.init(
    {
        //uuidb4
        userID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        addressID: {
            type: DataTypes.UUID,

            references: {
                model: Address,
                key: "addressID",
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },

        /*
  Request account deletion => Soft Delete
  */
        userStatusID: {
            type: DataTypes.ENUM("ADMIN", "USER", "TEMPBAN", "PERMBAN"),
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { min: 6, max: 40 },
        },

        lastName: { type: DataTypes.STRING, allowNull: false },

        phone: { type: DataTypes.STRING },

        dateOfBirth: { type: DataTypes.DATE, allowNull: false },

        bio: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize: sequelize }
);
