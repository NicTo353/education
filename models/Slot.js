const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  teacherId: {
    type: Types.ObjectId,
  },

  scheduleId: {
    type: Types.ObjectId,
    required: true,
  },

  groupId: {
    type: Types.ObjectId,
    required: true,
  },

  subjectId: {
    type: Types.ObjectId,
  },

  lessonNumber: {
    type: Number,
    required: true,
  },

  weekDayNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model("Slot", schema);
