const { model, Schema } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  course: {
    type: Number,
    required: true,
  },
});

module.exports = model("Group", schema);
