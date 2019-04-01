import TodoList from "./TodoList";
import { connect } from "react-redux";
import { gettodo } from "../actions/actions";

export default connect(
  state => {
    return {
      loading: state.loading.loading,
      data: state.getdata.data
    };
  },
  dispatch => {
    return {
      action: payload => dispatch(gettodo(payload))
    };
  }
)(TodoList);
