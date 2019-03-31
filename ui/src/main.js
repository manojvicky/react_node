import {get} from "./api";

let get1 = get("http://localhost:5000/api/todos");
get1.then(res=>res.json())
.then(data=>console.log('data',data));