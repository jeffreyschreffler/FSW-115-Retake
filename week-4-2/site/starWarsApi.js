
axios.get('https://swapi.dev/api/people/1')
.then((response) => {
    let starWars = response.data;
    console.log(starWars);
    for (let x in starWars) {
        let h2 = document.querySelector('#apiDisplay');
        let h3 = document.createElement('h3')
          h2.append(h3);
        h3.textContent = starWars[x];
    }
})
.catch((error) => {
    console.log(error);
})