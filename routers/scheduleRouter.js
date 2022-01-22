const express = require("express");
const controller = require("../controllers/ScheduleController");
const authMiddleware = require("../middleware/authMiddleware");
const isDeanMiddleware = require("../middleware/isDeanMiddleware");

const router = express.Router();

router.post("/", authMiddleware, controller.create);
router.get("/:id", authMiddleware, controller.getById);
router.get("/", authMiddleware, controller.getAll);
router.delete("/:id", authMiddleware, isDeanMiddleware, controller.deleteOneById);

module.exports = router;
