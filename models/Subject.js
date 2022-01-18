import { Schema, model } from "mongoose";



const schema = new Schema<ISubject>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

export default model("Subject", schema);
