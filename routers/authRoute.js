const express = require("express");
const controller = require("../controllers/AuthController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/registration",
  body("email").isEmail().withMessage("Must be email"),
  body("password").isLength({ min: 8 }).withMessage("Password must longer than 8 characters"),
  controller.registration
);

router.post("/login", controller.login);

module.exports = router;
