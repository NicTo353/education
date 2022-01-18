import { model, Schema } from "mongoose";

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

export default model("Group", schema);
