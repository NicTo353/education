const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({ message: "Вы не авторизованы!" });
    }
    const decodedData = jwt.verify(token, secret);
    res.user = decodedData;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Ошибка проверки авторизации!" });
  }
};
