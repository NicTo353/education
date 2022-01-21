const Schedule = require("../models/Schedule");

const scheduleController = {
  async create(req, res) {
    try {
      const scheduleData = req.body;
      const newSchedule = new Schedule(scheduleData);

      await newSchedule.save().catch((error) => {
        throw error;
      });

      const resBody = {
        id: newSchedule._id,
        name: newSchedule.name,
        content: newSchedule.content,
        groupId: newSchedule.groupId,
        message: "Расписание успешно создано!",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка создания расписания!");
      const resBody = {
        error,
        message: "Ошибка создания расписания!",
      };
      return res.status(500).json(resBody);
    }
  },

  async getAll(req, res) {
    try {
      const resBody = await Schedule.find().catch((error) => {
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
      const scheduleId = req.params.id;
      const scheduleData = await Schedule.findById(scheduleId).catch((error) => {
        throw error;
      });

      const resBody = {
        id: scheduleData._id,
        name: scheduleData.name,
        content: scheduleData.content,
        groupId: scheduleData.groupId,
        message: "Расписание найдено",
      };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка поиска расписания",
      };
      return res.status(500).json(resBody);
    }
  },

  async deleteOneById(req, res) {
    try {
      const scheduleId = req.params.id;
      const result = await Schedule.findByIdAndRemove(scheduleId).catch((error) => {
        throw error;
      });

      const resBody = { ...result, message: "Расписаниеа успешно удалено" };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка удаения расписания",
      };
      return res.status(500).json(resBody);
    }
  },
};

module.exports = scheduleController;
