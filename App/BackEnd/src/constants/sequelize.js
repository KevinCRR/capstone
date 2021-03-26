const Sequelize = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize.Sequelize({
    database: process.env["DB_DATABASE"],
    dialect: "postgres",
    host: "quick-gig-postgres",
    port: 5432,
    username: process.env["DB_USERNAME"],
    password: process.env["DB_PASSWORD"],
});

// module.exports = sequelize;
