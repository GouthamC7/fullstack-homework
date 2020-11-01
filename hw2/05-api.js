const url = 'https://restcountries.eu/rest/v2/all';
async function getJSON() {
    return fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}

async function caller() {
    var list = document.getElementById('results');
    const json = await this.getJSON();  
    json.forEach(element => {
        var data = element.name + " - " + element.population;
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(data));
        list.appendChild(entry);
    });            
}

caller()

