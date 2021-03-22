const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter.js").default;
const userRouter = require("./routes/userRouter.js").default;
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
