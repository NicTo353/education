const express = require("express");
const controller = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");
const isDeanMiddleware = require("../middleware/isDeanMiddleware");
const { body } = require("express-validator");


const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isDeanMiddleware,
  body("email").isEmail().withMessage("Must be email"),
  body("password").isLength({ min: 8 }).withMessage("Password must longer than 8 characters"),
  controller.create
);
router.get("/:id", authMiddleware, controller.getById);
router.get("/", authMiddleware, controller.getAll);
router.delete("/:id", authMiddleware, isDeanMiddleware, controller.deleteOneById);

module.exports = router;
