const Student = require("../models/Student");

const studentController = {
  async create(req, res) {
    try {
      const studentData = req.body;
      const newStudent = new Student(studentData);

      await newStudent.save().catch((error) => {
        throw error;
      });

      const resBody = {
        id: newStudent._id,
        name: newStudent.name,
        surname: newStudent.surname,
        parentName: newStudent.parentName,
        email: newStudent.email,
        groupId: newStudent.groupId,
        message: "Студент успешно создан!",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка создания студента!");
      const resBody = {
        error,
        message: "Ошибка создания студента!",
      };
      return res.status(500).json(resBody);
    }
  },

  async getAll(req, res) {
    try {
      const resBody = await Student.find().catch((error) => {
        throw error;
      });

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка получения студентов!");
      const resBody = {
        error,
        message: "Ошибка получения студентов!",
      };
      return res.status(500).json(resBody);
    }
  },

  async getById(req, res) {
    try {
      const studentId = req.params.id;
      const studentData = await Student.findById(studentId).catch((error) => {
        throw error;
      });

      const resBody = {
        id: studentData,
        name: studentData.name,
        surname: studentData.surname,
        parentName: studentData.parentName,
        email: studentData.email,
        groupId: studentData.groupId,
        message: "Студент найден",
      };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка поиска студента",
      };
      return res.status(500).json(resBody);
    }
  },

  async deleteOneById(req, res) {
    try {
      const studentId = req.params.id;
      const result = await Student.findByIdAndRemove(studentId).catch((error) => {
        throw error;
      });

      const resBody = { ...result, message: "Студента успешно удален" };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка удаения студента",
      };
      return res.status(500).json(resBody);
    }
  },
};

module.exports = studentController;
