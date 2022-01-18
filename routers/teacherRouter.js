const express = require("express");
const controller = require("../controllers/TeacherController");

const router = express.Router();

router.post("/", controller.create);
router.get("/:id", controller.getById);
router.get("/", controller.getAll);
router.delete("/:id", controller.deleteOneById);

module.exports = router;
