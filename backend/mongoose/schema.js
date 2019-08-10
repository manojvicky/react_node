import mongoose from "mongoose";
let Schema = mongoose.Schema;

let SomeModelSchema = new Schema({
    name: String,
    DOB: Date
});

export default SomeModelSchema;