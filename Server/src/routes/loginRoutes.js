const express = require("express");
const {
  validateLogin,
  createUser,
} = require("../controllers/login_ctrl/validateLogin");

const routerLogin = express.Router();

routerLogin.get("/", async (req, res) => {
  try {
    const access = validateLogin(req, res);
    return access;
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

routerLogin.post("/", async (req, res) => {
  try {
    createUser(req, res);
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = routerLogin;
