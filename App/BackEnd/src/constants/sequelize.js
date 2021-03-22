import Sequelize from "sequelize";

const sequelize = new Sequelize.Sequelize({
    database: "gigfinder",
    dialect: "postgres",
    host: "quick-gig-postgres",
    port: 5432,
    username: "gigfinder-user",
    password: "gigfinder-password",
});

module.exports = sequelize;
