const Teacher = require("../models/Teacher");

class TeacherController {
  


  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Wrong data",
        });
      }

      const { email, password, name, surname, parentName, role } = req.body;
      const candidate = await Teacher.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Email уже зарегистрирован" });
      }

      if(role !== "DEAN" || role !== "TEACHER"){
        return res.status(400).json({message: "No such role"})
      }

      const hashedPassword = bcrypt.hashSync(password, 7);
      const teacher = new Teacher({
        email,
        name,
        parentName,
        surname,
        role,
        password: hashedPassword,
      });
      await teacher.save();

      return res.status(200).json({ message: "Teacher registered successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
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