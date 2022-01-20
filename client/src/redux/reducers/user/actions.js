export const UserActionTypes = {
  CLEAR_USER_DATA: "CLEAR_USER_DATA",
  SET_USER_DATA: "SET_USER_DATA",
};

export const userActionCreators = {
  setUserData: ({ id, email, name, surname, parentName, role, token }) => ({
    type: UserActionTypes.SET_USER_DATA,
    payload: {
      id,
      email,
      name,
      surname,
      parentName,
      role,
      token,
    },
  }),

  clearUserData: () => ({
    type: UserActionTypes.CLEAR_USER_DATA,
  }),
};
