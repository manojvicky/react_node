import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import { addtodo } from "../actions/actions";
export default connect(
  undefined,
  dispatch => {
    return {
      action: payload => dispatch(addtodo(payload))
    };
  }
)(AddTodo);
