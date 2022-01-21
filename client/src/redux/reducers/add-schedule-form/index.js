// const initialState = {
//   slotsTime: [
//     {
//       id: 1,
//       time: "9:00",
//     },
//     {
//       id: 2,
//       time: "10:45",
//     },
//     {
//       id: 3,
//       time: "12:30",
//     },
//     {
//       id: 4,
//       time: "14:15",
//     },
//     {
//       id: 5,
//       time: "16:00",
//     },
//   ],
//   days: [
//     {
//       id: 1,
//       name: "Понедельник",
//       slots: [
//         {
//           id: 1,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 2,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 3,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 4,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 5,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Вторник",
//       slots: [
//         {
//           id: 1,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 2,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 3,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 4,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 5,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Среда",
//       slots: [
//         {
//           id: 1,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 2,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 3,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 4,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 5,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "Четверг",
//       slots: [
//         {
//           id: 1,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 2,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 3,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 4,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 5,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: "Пятница",
//       slots: [
//         {
//           id: 1,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 2,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 3,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 4,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//         {
//           id: 5,
//           teacher: null,
//           subject: null,
//           cabinet: null,
//         },
//       ],
//     },
//   ],
// };

const initialState = {
  groupId: null,
  name: "",
  dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
  lessonsTime: ["9:00", "10:45", "12:30", "14:15", "16:00"],

  slots: [
    {
      teacherId: null,
      subjectId: null,

      weekDayNumber: 1,
      lessonNumber: "1",
    },
  ],
};

function addScheduleFormReducer(state = initialState, action) {
  switch (action.type) {
    case AddScheduleFormActionTypes.RESET_ADD_SCHEDULE_FORM:
      const { dayNames, lessonsTime } = initialState;
      const slots = [];

      for (let dayIndex = 0; dayIndex < dayNames.length; dayIndex++) {
        for (let timeIndex = 0; timeIndex < lessonsTime.length; timeIndex++) {
          slots.push({
            teacherId: null,
            subjectId: null,
            weekDayNumber: dayIndex + 1,
            lessonNumber: timeIndex + 1,
          });
        }
      }

      return {
        ...initialState,
        slots,
      };

    case AddScheduleFormActionTypes.CHANGE_ADD_SCHEDULE_FORM_TOP_LEVEL_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case AddScheduleFormActionTypes.CHANGE_SLOT_FIELD_BY_WEEK_DAY_AND_LESSON_NUMBERS:
      return {
        ...state,
        slots: state.slots.map((s) => {
          if (
            s.weekDayNumber === action.payload.weekDayNumber &&
            s.lessonNumber === action.payload.lessonNumber
          ) {
            return {
              ...s,
              [action.payload.name]: action.payload.value,
            };
          }
          return s;
        }),
      };

    default:
      return state;
  }
}

export default addScheduleFormReducer;
