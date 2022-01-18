const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization;
    const decodedData = jwt.verify(token, secret);
    res.user = decodedData;
    if (decodedData.role !== "DEAN") {
      return res.status(403).json({ message: "Вы не обладаете правами декана!" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Ошибка проверки авторизации!" });
  }
};
