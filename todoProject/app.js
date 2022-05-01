const todoForm = document.todoForm;
const addBtn = document.querySelector('#submit')

// get 


    axios.get('http://api.bryanuniversity.edu/jay/list')
    .then((res) =>{
        console.log(res.data);
        createTodo(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

function createTodo(data){
    let todoDisplay = document.querySelector('#todoDisplay');
    for (let i = 0; i < data.length; i++) {
        let h3 = document.createElement('h3');
        todoDisplay.append(h3);
        h3.textContent = `Title: ${data[i].name} | Price: $${data[i].price} | Description: ${data[i].description}`;
        if (data[i].isComplete === true) {
            h3.style.textDecoration = 'line-through';
    }
    
    }
}

// post 

addBtn.addEventListner('submit',function(e) {
   e.preventDefaultﬁ
    console.log('test')
    // const newTodo = {
    //     name: todoForm.title.value,
    //     price: todoForm.price.value,
    //     decription: todoForm.value
    // }

axios.post('http://api.bryanuniversity.edu/jay/list', newTodo)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err)
})
});