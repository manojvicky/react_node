//import mongoose and setup db Connection
import mongoose from 'mongoose';


export default function initlize(port, dbName){
    mongoose.connect(`mongodb://localhost:${port}/${dbName}`, {useNewUrlParser: true});
    return mongoose.connection;
}

