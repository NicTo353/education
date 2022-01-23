import { SingleSchedulePageActionNames } from "./actions";

const initialState = {
  dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
  lessonsTime: ["9:00", "10:45", "12:30", "14:15", "16:00"],
  slots: [],
};

function singleSchedulePageReducer(state = initialState, action) {
  switch (action.type) {
    case SingleSchedulePageActionNames.SET_SINGLE_SCHEDULE_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default singleSchedulePageReducer;
