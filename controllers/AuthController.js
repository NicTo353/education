const Teacher = require("../models/Teacher");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

function _generateAccessToken(id, email, role) {
  const payload = {
    id,
    email,
    role,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
}

const authController = {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Wrong data",
        });
      }

      const { email, password, name, surname, parentName } = req.body;
      const correctEmail = email.toLowerCase();
      const candidate = await Teacher.findOne({ email: correctEmail });
      if (candidate) {
        return res.status(400).json({ message: "Email уже зарегистрирован" });
      }

      const hashedPassword = bcrypt.hashSync(password, 7);
      const teacher = new Teacher({
        email: correctEmail,
        name,
        parentName,
        surname,
        password: hashedPassword,
        role: "TEACHER",
      });
      await teacher.save();

      const token = _generateAccessToken(teacher._id, teacher.email, teacher.role);

      const resBody = {
        email: teacher.email,
        name: teacher.name,
        surname: teacher.surname,
        parentName: teacher.parentName,
        id: teacher._id,
        token,
        role: "TEACHER",
        message: "Teacher registered successfully",
      };

      return res.status(200).json(resBody);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error, message: "Email занят" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email: email.toLowerCase() });
      if (!teacher) {
        return res.status(400).json("No teacher with this email");
      }

      const isPasswordCorrect = bcrypt.compareSync(password, teacher.password);
      if (!isPasswordCorrect) {
        return res.status(400).json("Wrong password!");
      }

      const token = _generateAccessToken(teacher._id, teacher.email, teacher.role);
      return res.status(200).json({
        token,
        id: teacher._id,
        name: teacher.name,
        surname: teacher.surname,
        parentName: teacher.parentName,
        email: teacher.email,
        role: teacher.role,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authController;
