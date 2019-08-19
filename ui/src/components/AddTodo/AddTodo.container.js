import { connect } from "react-redux";
import AddTodoIcon from "./AddTodoIcon";
import { addtodo } from "../../actions/actions";
export default connect(
  undefined,
  dispatch => {
    return {
      action: payload => dispatch(addtodo(payload))
    };
  }
)(AddTodoIcon);
