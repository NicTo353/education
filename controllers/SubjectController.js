const Subject = require("../models/Subject");

class SubjectController {
  async create(req, res) {
    try {
      const subjectData = req.body;
      const newSubject = new Subject(subjectData);

      await newSubject.save().catch((error) => {
        throw error;
      });

      const resBody = {
        id: newSubject._id,
        name: newSubject.name,
        message: "Предмет успешно создан!",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка создания предмета!");
      const resBody = {
        error,
        message: "Ошибка создания предмета!",
      };
      return res.status(500).json(resBody);
    }
  }

  async getAll(req, res) {
    try {
      const resBody = await Subject.find().catch((error) => {
        throw error;
      });

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка получения предметов!");
      const resBody = {
        error,
        message: "Ошибка получения предметов!",
      };
      return res.status(500).json(resBody);
    }
  }

  async getById(req, res) {
    try {
      const subjectId = req.params.id;
      const subjectData = await Subject.findById(subjectId).catch((error) => {
        throw error;
      });

      const resBody = {
        id: subjectData._id,
        name: subjectData.name,
        message: "Предмет найден",
      };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка поиска предмета",
      };
      return res.status(500).json(resBody);
    }
  }

  async deleteOneById(req, res) {
    try {
      const subjectId = req.params.id;
      const result = await Subject.findByIdAndRemove(subjectId).catch((error) => {
        throw error;
      });

      const resBody = { ...result, message: "Предмет успешно удален" };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка удаения предмета",
      };
      return res.status(500).json(resBody);
    }
  }
}

module.exports = new SubjectController();
