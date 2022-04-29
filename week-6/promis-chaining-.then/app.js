let display = document.querySelector('#display')

// first call
axios.get('https://swapi.dev/api/people/2')
.then((res) =>{
    console.log(res.data);
    //choose array/item
    const film1 = res.data.films[0];
    //return the new api call
    return axios.get(film1)
    //new .then for new call 
}).then((res) =>{
    console.log(res.data)
    let h1 = document.createElement('h1')
    display.append(h1);
    h1.textContent = `Moive: ${res.data.title}`;
    let h2 = document.createElement('h2');
    display.append(h2);
    h2.textContent = `${res.data.opening_crawl}`
    const char1 = res.data.characters[0];
    return axios.get(char1)
})
.then((res) =>{
    console.log(res.data)
    let h1 = document.createElement('h1')
    display.append(h1);
    h1.textContent = `Main Character: ${res.data.name}`;
    const starShip = res.data.starships[0]
    return axios.get(starShip)
})
// new .then for star ships
.then((res)=> {
    //log starShip
    console.log(res.data)
    let h1 = document.createElement('h1')
    display.append(h1);
    h1.textContent = `Starship: ${res.data.name};`
})
.catch((err) =>{
    console.log(err)
})