const Group = require("../models/Group");

class GroupController {
  async create(req, res) {
    try {
      const groupData = req.body;
      const newGroup = new Group(groupData);

      await newGroup.save().catch((error) => {
        throw error;
      });

      const resBody = {
        id: newGroup._id,
        name: newGroup.name,
        course: newGroup.course,
        message: "Группа успешно создана!",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка создания группы!");
      const resBody = {
        error,
        message: "Ошибка создания группы!",
      };
      return res.status(500).json(resBody);
    }
  }

  async getAll(req, res) {
    try {
      const resBody = await Group.find().catch((error) => {
        throw error;
      });

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "Ошибка получения групп!");
      const resBody = {
        error,
        message: "Ошибка получения групп!",
      };
      return res.status(500).json(resBody);
    }
  }

  async getById(req, res) {
    try {
      const groupId = req.params.id;
      const groupData = await Group.findById(groupId).catch((error) => {
        throw error;
      });

      const resBody = {
        id: groupData._id,
        name: groupData.name,
        course: groupData.course,
        message: "Группа найдена",
      };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error, "");
      const resBody = {
        error,
        message: "Ошибка поиска группы",
      };
      return res.status(500).json(resBody);
    }
  }

  async deleteOneById(req, res) {
    try {
      const groupId = req.params.id;
      const result = await Group.findByIdAndRemove(groupId).catch((error) => {
        throw error;
      });

      const resBody = { ...result, message: "Группа успешно удалена" };
      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error);
      const resBody = {
        error,
        message: "Ошибка удаения группы",
      };
      return res.status(500).json(resBody);
    }
  }
}
module.exports = new GroupController();
