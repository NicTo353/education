export const SingleSchedulePageActionNames = {
  SET_SINGLE_SCHEDULE_DATA: "SET_SINGLE_SCHEDULE_DATA",
};

export const singleSchedulePageActinCreators = {
  setSingleScheduleData: ({ slots, name, id, groupId }) => ({
    type: SingleSchedulePageActionNames.SET_SINGLE_SCHEDULE_DATA,
    payload: {
      slots,
      name,
      id,
      groupId,
    },
  }),
};
