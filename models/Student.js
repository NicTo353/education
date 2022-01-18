const { model, Schema, Types } = require("mongoose");

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

  email: {
    type: String,
    required: false,
  },

  groupId: {
    type: Types.ObjectId,
    ref: "Group",
    required: false,
  },
});

module.exports = model("Student", schema);
