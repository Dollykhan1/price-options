// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch(url)
// .then(Response => Response.json())
// .then(json => console.log(json))
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> response.json())
    .then(json=> console.log(json))

}
