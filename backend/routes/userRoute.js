const express = require("express");

// controller functions
const {
  loginUser,
  registerUser,
  logoutUser,
  getById,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.route("/login").post(loginUser);

// signup route
router.route("/register").post(registerUser);

// logout route
router.route("/logout").get(logoutUser);

// find by id route
router.route("/getById").post(getById);

// verify token route
router.route("/getUser").post(getUser);

module.exports = router;
