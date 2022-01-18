const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  content: {
    type: Object,
    required: true,
  },

  groupId: {
    type: Types.ObjectId,
    ref: "Group",
    required: false,
  },
});

module.exports = model("Schedule", schema);
