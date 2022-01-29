const Schedule = require("../models/Schedule");
const Slot = require("../models/Slot");

const scheduleController = {
  async create(req, res) {
    try {
      const { slots, name, groupId } = req.body;
      const newSchedule = await new Schedule({ name, groupId });

      await newSchedule.save().catch((error) => {
        throw error;
      });

      const { _id } = newSchedule;

      const preparedSlots = slots.map((s) => {
        return {
          ...s,
          groupId,
          scheduleId: _id,
        };
      });

      await Slot.insertMany(preparedSlots).catch((error) => {
        throw error;
      });

      const resBody = {
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
      const schedules = await Schedule.find()
        .then((res) => {
          return res.map((s) => {
            const { _id, name, groupId } = s;

            return {
              id: _id,
              name,
              groupId,
            };
          });
        })
        .catch((error) => {
          throw error;
        });

      return res.status(200).json(schedules);
    } catch (error) {
      console.log(error, "Ошибка получения расписаний!");
      const resBody = {
        error,
        message: "Ошибка получения расписаний!",
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

      const slotsData = await Slot.find({ scheduleId }).catch((erorr) => {
        throw erorr;
      });

      const slots = slotsData.map((s) => {
        const { teacherId, groupId, subjectId, lessonNumber, weekDayNumber, _id } = s;

        return {
          id: _id,
          teacherId,
          groupId,
          subjectId,
          lessonNumber,
          weekDayNumber,
        };
      });

      console.log(scheduleData.name);

      const resBody = {
        id: scheduleData._id,
        name: scheduleData.name,
        groupId: scheduleData.groupId,
        message: "Расписание найдено",
        slots,
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
