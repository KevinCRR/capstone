const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter.js");
const userRouter = require("./routes/userRouter.js");
const sequelize = require("./constants/sequelize");
const bodyParser = require("body-parser");

const main = async () => {
    sequelize
        .authenticate()
        .then(() => console.log("Connection has been established successfully"))
        .catch(err => console.error("Unable to connect to the database:", err));

    sequelize
        .sync()
        .then(() => console.log("Database has been synced successfully"))
        .catch(err => console.error("Unable to sync the database:", err));

    const app = express();
    app.use(
        cors({
            origin: ["localhost", "quick-gig.localhost"],
            credentials: true,
        })
    );
    app.use(bodyParser.json());

    app.use("/api", ({ res }) => {
        res.send({ running: true });
    });
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter);

    // http://google.com/auth/login
    // http://google.com/post/1

    app.listen(4000, () => {
        console.log("Listening to http://quick-gig.localhost/api");
    });
};

main().catch(err => console.log(err));
