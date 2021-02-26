import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  database: "gigfinder",
  dialect: "postgres",
  host: "gigfinder-db",
  username: "gigfinder-user",
  password: "gigfinder-password",
});

const ConnectToDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    throw console.error("Unable to connect to the database:", error);
  }
};

export { ConnectToDB };
