import express from "express";

export default class UserController {
  static CurrentUser(req, res) {
    res.send("Hello");
  }

  static GetUser(req, res) {
    const { userid } = req.params;

    res.send(`Attempting to get user with ID: ${userid}`);
  }
}
