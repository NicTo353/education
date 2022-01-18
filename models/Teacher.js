import { model, Schema } from "mongoose";

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

export default model("Teacher", schema);
