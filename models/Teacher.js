const { model, Schema } = require("mongoose");

const schema = new Schema({
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
