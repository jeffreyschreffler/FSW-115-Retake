

axios.get('https://bobsburgers-api.herokuapp.com/characters/1')
.then((response) => {
    let bobsData = response.data;
    console.log(bobsData);
    for (let x in bobsData) {
        let h2 = document.querySelector('#apiDisplay');
        let h3 = document.createElement('h3')
          h2.append(h3);
        h3.textContent = bobsData[x];
    }
})
.catch((error) => {
    console.log(error);
})