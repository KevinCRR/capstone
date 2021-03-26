const express = require("express");

class UserController {
    static CurrentUser(req, res) {
        res.send("Hello");
    }

    static GetUser(req, res) {
        const { userid } = req.params;

        res.send(`Attempting to get user with ID: ${userid}`);
    }
}

module.exports = UserController;
