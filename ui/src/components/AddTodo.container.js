import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { addtodo } from "../actions/actions";
export default connect(
  undefined,
  dispatch => {
    return {
      action: payload => dispatch(addtodo(payload))
    };
  }
)(AddTodo);
