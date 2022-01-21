const AddScheduleFormActionTypes = {
  RESET_ADD_SCHEDULE_FORM: "RESET_ADD_SCHEDULE_FORM",
  CHANGE_ADD_SCHEDULE_FORM_TOP_LEVEL_FIELD: "CHANGE_ADD_SCHEDULE_FORM_TOP_LEVEL_FIELD",
  CHANGE_SLOT_FIELD_BY_WEEK_DAY_AND_LESSON_NUMBERS:
    "CHANGE_SLOT_FIELD_BY_WEEK_DAY_AND_LESSON_NUMBERS",
};

const AddScheduleFormActionCreators = {
  clearAddScheduleForm: () => ({
    type: AddScheduleFormActionTypes.RESET_ADD_SCHEDULE_FORM,
  }),

  changeAddScheduleFormTopLevelField: ({ name, value }) => ({
    type: AddScheduleFormActionTypes.CHANGE_ADD_SCHEDULE_FORM_TOP_LEVEL_FIELD,
    payload: {
      name,
      value,
    },
  }),

  changeSlotFieldByWeekDayAndLessonNumbers: ({ weekDayNumber, lessonNumber }) => ({
    type: AddScheduleFormActionTypes.CHANGE_SLOT_FIELD_BY_WEEK_DAY_AND_LESSON_NUMBERS,
    payload: {
      weekDayNumber,
      lessonNumber,
    },
  }),
};
