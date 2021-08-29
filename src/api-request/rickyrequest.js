const fetchData = require('./fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data =>{ //Se hace el primer llamado para resolver algo
        console.log(data.info.count); 
        return fetchData(`${API}${data.results[1].id}`);
    })

    .then(data => {
        console.log(data.name) //presetnar la informacion y presentarla
        console.log(data.status)
        console.log(data.gender)
        return fetchData(data.origin.url)
    })

    .then(data =>{
       console.log(data.dimension) 
    })


    .catch(err => console.error(err));
