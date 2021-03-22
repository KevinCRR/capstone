import express from "express";
const userRouter = express.Router();
import UserController from "../controller/user.js";

/**
 * Get the current user
 */
userRouter.get("/me", UserController.CurrentUser);

/**
 * Get a single user by the user id
 */
userRouter.get("/:userid", UserController.GetUser);
export default userRouter;
