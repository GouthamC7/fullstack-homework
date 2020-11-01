const url = 'https://pokeapi.co/api/v2/pokemon/';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Enter your code here
async function getJSON(newurl) {
    return fetch(newurl)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}

async function caller(url) {
    var list = document.getElementById('results');
    const json = await this.getJSON(url);
    json.results.forEach(element => {
        //console.log(element.name)
        var entry = document.createElement('span');
        entry.appendChild(document.createTextNode(element.name.capitalize()+ " - " ));
        list.appendChild(entry);
    });  
    console.log(json)
    if(json.next !== null) {
        caller(json.next);
    }
}

caller(url)
