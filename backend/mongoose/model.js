import mongoose from "mongoose";
import SomeModelSchema from "./schema";


let SomeModel = mongoose.model('SomeModel', SomeModelSchema );


export default SomeModel;