import mongoose from "mongoose";
import TodoSchema from "./TodoSchema";

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;