const express = require("express");
const controller = require("../controllers/groupController");
const authMiddleware = require("../middleware/authMiddleware");
const isDeanMiddleware = require("../middleware/isDeanMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isDeanMiddleware, controller.create);
router.get("/:id", authMiddleware, controller.getById);
router.get("/", authMiddleware, controller.getAll);
router.delete("/:id", authMiddleware, isDeanMiddleware, controller.deleteOneById);

module.exports = router;
