
// api call bobs

 const getBobsCharacter = (charNum) => {
    axios.get(`https://bobsburgers-api.herokuapp.com/characters/${charNum}`)
    .then((res) => {
        console.log(res.data)
        let displayName = document.querySelector('#bobsNameLabel');
        displayName.textContent = res.data.name
        let displayImg = document.querySelector('#bobsPlaceholderImg');
        displayImg.src = res.data.image;
    })
    .catch((err) =>{
        console.log(err);
        let displayName = document.querySelector('#bobsNameLabel');
        displayName.textContent = 'Sorry they do not exsist.';
        let displayImg = document.querySelector('#bobsPlaceholderImg');
        displayImg.src = 'https://cdn-icons-png.flaticon.com/512/31/31551.png';

    })
}

// event listener bobs

let bobsBtn = document.querySelector('#getBobsBtn');
let userNumber = document.querySelector('#bobsCharacterNumber');

bobsBtn.addEventListener('click', () => {
    getBobsCharacter(userNumber.value)
})

//todo api


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
    let itemList = document.querySelector('#itemList');
    for (let i = 0; i < data.length; i++) {
        let h3 = document.createElement('h3');
        itemList.append(h3);
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