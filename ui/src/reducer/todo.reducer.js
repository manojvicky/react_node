export const initalState = {
    data: []
  };
  
  const reducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADDTODO":
        return {
          data: [...state.data, payload]
        };
      case "GETTODO":
        return {
          data: payload
        };
      default:
        return state;
    }
  };
  export default reducer;
  