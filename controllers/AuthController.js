const Teacher = require("../models/Teacher");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

class AuthController {
  _generateAccessToken(id, email, role) {
    const payload = {
      id,
      email,
      role,
    };
    return jwt.sign(payload, secret, { expiresIn: "24h" });
  }

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
      const candidate = await Teacher.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Email уже зарегистрирован" });
      }

      const hashedPassword = bcrypt.hashSync(password, 7);
      const teacher = new Teacher({
        email,
        name,
        parentName,
        surname,
        password: hashedPassword,
        role: "TEACHER",
      });
      await teacher.save();

      return res.status(200).json({ message: "Teacher registered successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email });
      if (!teacher) {
        return res.status(400).json("No teacher with this email");
      }

      const isPasswordCorrect = bcrypt.compareSync(password, teacher.password);
      if (!isPasswordCorrect) {
        return res.status(400).json("Wrong password!");
      }

      const token = _generateAccessToken(teacher._id, teacher.email, teacher.role);
      return res.status(200).json({ token, teacherId: teacher._id, role: teacher.role });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
