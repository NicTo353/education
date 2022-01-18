const Teacher = require("../models/Teacher");

class TeacherController {
  async create(req, res) {
    try {
      const teacherData = req.body;
      const newTeacher = new Teacher(teacherData);

      await newTeacher.save().catch((error) => {
        throw error;
      });

      const resBody = {
        id: newTeacher._id,
        name: newTeacher.name,
        surname: newTeacher.surname,
        parentName: newTeacher.parentName,
        message: "Учитель успешно создан!",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка создания учителя!");
      const resBody = {
        error,
        message: "Ошибка создания учителя!",
      };
      return res.status(500).json(resBody);
    }
  }

  async getAll(req, res) {
    try {
      const resBody = await Teacher.find().catch((error) => {
        throw error;
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
  }

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
  }

  async deleteOneById(req, res) {
    try {
      const teacherId = req.params.id;
      const result = await Teacher.findByIdAndRemove(teacherId).catch((error) => {
        throw error;
      });

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
  }
}

module.exports = new TeacherController();
