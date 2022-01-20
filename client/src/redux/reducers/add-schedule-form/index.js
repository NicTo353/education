const initialState = {
  slotsTime: [
    {
      id: 1,
      time: "9:00",
    },
    {
      id: 2,
      time: "10:45",
    },
    {
      id: 3,
      time: "12:30",
    },
    {
      id: 4,
      time: "14:15",
    },
    {
      id: 5,
      time: "16:00",
    },
  ],
  days: [
    {
      id: 1,
      name: "Понедельник",
      slots: [
        {
          id: 1,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 2,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 3,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 4,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 5,
          teacher: null,
          subject: null,
          cabinet: null,
        },
      ],
    },
    {
      id: 2,
      name: "Вторник",
      slots: [
        {
          id: 1,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 2,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 3,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 4,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 5,
          teacher: null,
          subject: null,
          cabinet: null,
        },
      ],
    },
    {
      id: 3,
      name: "Среда",
      slots: [
        {
          id: 1,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 2,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 3,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 4,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 5,
          teacher: null,
          subject: null,
          cabinet: null,
        },
      ],
    },
    {
      id: 4,
      name: "Четверг",
      slots: [
        {
          id: 1,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 2,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 3,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 4,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 5,
          teacher: null,
          subject: null,
          cabinet: null,
        },
      ],
    },
    {
      id: 5,
      name: "Пятница",
      slots: [
        {
          id: 1,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 2,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 3,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 4,
          teacher: null,
          subject: null,
          cabinet: null,
        },
        {
          id: 5,
          teacher: null,
          subject: null,
          cabinet: null,
        },
      ],
    },
  ],
};

function addScheduleFormReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default addScheduleFormReducer;
