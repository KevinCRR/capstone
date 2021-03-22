import express from "express";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import { sequelize } from "./constants/sequelize";

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
    app.use(express.json());

    app.use("", ({ res }) => {
        res.send("Hello");
    });

    app.post("/login", ({ res }) => {
        res.send("LOGIN");
    });

    app.use("/auth", authRouter);
    app.use("/user", userRouter);

    // http://google.com/auth/login
    // http://google.com/post/1

    app.listen(4000, () => {
        console.log("Listening to http://localhost:4000/");
    });
};

main().catch(err => console.log(err));
