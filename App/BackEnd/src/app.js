import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
const app = express();

app.use(
    cors({
        origin: ["localhost", "quick-gig.localhost"],
        credentials: true,
    })
);
app.use(Express.json());

app.use("", ({ res }) => {
    res.send("Hello");
});

app.post("/login", ({ res }) => {
    res.send("LOGIN");
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

module.exports = app;
