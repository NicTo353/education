const Teacher = require("../models/Teacher");
const Slot = require("../models/Slot");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs/dist/bcrypt");

const teacherController = {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Wrong data",
        });
      }

      console.log(req.body);

      const { email, password, name, surname, parentName, role } = req.body;
      const candidate = await Teacher.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Email уже зарегистрирован" });
      }

      if (role !== "DEAN" && role !== "TEACHER") {
        return res.status(400).json({ message: "Нет такой роли!" });
      }

      const hashedPassword = bcrypt.hashSync(password, 7);
      const teacher = await new Teacher({
        email,
        name,
        parentName,
        surname,
        role,
        password: hashedPassword,
      });

      await teacher.save().catch((error) => {
        throw error;
      });

      return res.status(200).json({ message: "Учитель успешно зарегистрирован!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка!" });
    }
  },

  async getAll(req, res) {
    try {
      const teachers = await Teacher.find().catch((error) => {
        throw error;
      });
      const teacherIdArr = teachers.map((t) => {
        return t._id;
      });

      const slotsData = await Slot.find({ teacherId: teacherIdArr }).catch((error) => {
        throw error;
      });

      const slots = slotsData.map((s) => {
        const { _id, groupId, scheduleId, teacherId, lessonNumber, weekDayNumber, subjectId } = s;
        return {
          id: _id,
          groupId,
          scheduleId,
          teacherId,
          lessonNumber,
          weekDayNumber,
          subjectId,
        };
      });

      const resBody = teachers.map((t) => {
        return {
          id: t._id,
          name: t.name,
          surname: t.surname,
          parentName: t.parentName,
          email: t.email,
          role: t.role === "DEAN" ? "DEAN" : "TEACHER",
          slots: slots.filter((s) => {
            return s.teacherId.equals(t._id);
          }),
        };
      });

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка получения учителей!");
      const resBody = {
        error,
        message: "Ошибка получения учителей!",
      };
      return res.status(500).json(resBody);
    }
  },

  async getById(req, res) {
    try {
      const teacherId = req.params.id;
      const teacherData = await Teacher.findById(teacherId).catch((error) => {
        throw error;
      });

      const resBody = {
        id: teacherData._id,
        name: teacherData.name,
        surname: teacherData.surname,
        parentName: teacherData.parentName,
        message: "Учитель найден",
      };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка поиска учителя",
      };
      return res.status(500).json(resBody);
    }
  },

  async deleteOneById(req, res) {
    try {
      const teacherId = req.params.id;
      const result = await Teacher.findByIdAndRemove(teacherId).catch((error) => {
        throw error;
      });

      await Slot.updateMany({ teacherId }, { teacherId: null, subjectId: null });

      const resBody = { ...result, message: "Учитель успешно удален" };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка удаения учителя",
      };
      return res.status(500).json(resBody);
    }
  },
};

module.exports = teacherController;
