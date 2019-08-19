import mongoose from "mongoose";
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
    title: {type: String, required: true, trim: true},
    description: String,
    id: {type: Number},
    important: Boolean,
    endDay: {type: Date, default: new Date(new Date().getTime()+86400000 )}
});
export default TodoSchema;