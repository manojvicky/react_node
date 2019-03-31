
fetch("http://localhost:5000/api/todos")
.then(res=>res.json())
.then(data=> console.log("data h ki nhi", data))

fetch('http://localhost:5000/api/todos', {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify({
      title: 'manoj',
      description: 'prajapati0'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))