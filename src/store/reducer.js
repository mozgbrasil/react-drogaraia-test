const initialState = {
  showAltTheme: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, showAltTheme: action.value };
    default:
      return state;
  }
};

export default reducer;
