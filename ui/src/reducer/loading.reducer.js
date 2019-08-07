export const initalState = {
    loading: false
  };
  
  const reducer = (state = initalState, action) => {
    const { type } = action;
    switch (type) {
      case "LOADING":
        return {
          loading: !state.loading
        };
      default:
        return state;
    }
  };
  export default reducer;
  