const { model, Schema } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

});

module.exports = model("Group", schema);
