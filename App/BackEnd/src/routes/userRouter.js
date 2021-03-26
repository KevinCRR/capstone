const express = require("express");
const UserController = require("../controller/user.js");

const userRouter = express.Router();

/**
 * Get the current user
 */
userRouter.get("/me", UserController.CurrentUser);

/**
 * Get a single user by the user id
 */
userRouter.get("/:userid", UserController.GetUser);
module.exports = userRouter;
