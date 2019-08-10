import mongoose from "mongoose";
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
    title: {type: String, required: true, trim: true},
    description: String,
    id: {type: Number, required: true},
    important: Boolean,
    endDay: {type: Date, default: Date.now()}
});
export default TodoSchema;