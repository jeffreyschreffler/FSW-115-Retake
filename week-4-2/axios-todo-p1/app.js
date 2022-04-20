
// api  call
axios.get('http://api.bryanuniversity.edu/jay/list')
.then((resolved) => {
    console.log(resolved.data)
    console.log(resolved.data[1].name);
    createTodo(resolved.data)
})
.catch((error) => {
    console.log(error)
})

function createTodo(data){
    let mainDisplay = document.querySelector('#mainDisplay');
    for (let i = 0; i < data.length; i++){
        let h1 = document.createElement('h1');
        mainDisplay.append(h1);
        h1.textContent = data[i].name
        if (data[i].isComplete === true )
        h1.style.textDecoration = 'line-through';
    }
}