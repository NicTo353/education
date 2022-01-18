import { model, Schema, Types } from "mongoose";

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

export default model("Schedule", schema);
