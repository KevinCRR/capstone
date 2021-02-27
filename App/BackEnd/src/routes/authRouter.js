import express from "express";
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("LOGIN");
});

authRouter.get("/signup", (req, res) => {
  res.send("LOGIN");
});

authRouter.get("/forgot-password", (req, res) => {
  res.send("LOGIN");
});

export default authRouter;
