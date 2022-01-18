const { model, Schema } = require("mongoose");

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    required: true,
  },

  parentName: {
    type: String,
    required: true,
  },
});

module.exports = model("Teacher", schema);
