import express from "express";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import { ConnectToDB } from "./constants/sequelize";

const main = async () => {
  //Connect to the database
  // await ConnectToDB();

  const app = express();

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

main().catch((err) => console.log(err));
