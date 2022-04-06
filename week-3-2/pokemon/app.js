let mainDiv = document.querySelector('#main');

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText)
        let data = JSON.parse(request.responseText);
        // console.log(data)
        //pass data out
        showData(data.results);
    } else if(request.readyState === 4 && request.status !== 200) {
        console.log('Error!')
    }
}
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
request.send();

function showData(data){
    // console.log(data)
    data.forEach(function(elm){
        let pokemon = document.createElement('h2');
        mainDiv.append(pokemon);
        pokemon.textContent = elm.name
    })
}