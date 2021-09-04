const idField = document.getElementById('ricky');
const button = document.getElementById('abrir');
const id = document.getElementById('id');
const names = document.getElementById('name');
const status = document.getElementById('status');
const specie = document.getElementById('specie');
const gender = document.getElementById('gender');
const picture = document.getElementById('picture');
const error = document.getElementById('error');

function renderimagen(image1) {
    picture.setAttribute('src',image1);

}

const API = 'https://rickandmortyapi.com/api/character'


button.addEventListener('click',function(){
    usuario = idField.value;
    fetch (`${API}`)
    .then (response => response.json())
    .then (data => {
       const error2 = data.info.count;
    //    return fetch(error2);
      
    
    fetch(`${API}/${usuario}`)
    .then (response => response.json())
    .then (data =>{   
        if (usuario <= error2 && usuario > 0){
        renderimagen(data.image);
        id.innerHTML = `${"ID: "}${data.id}`;
        names.innerHTML = `${"Name: "}${data.name}`;
        status.innerHTML = `${"Status: "}${data.status}`;
        specie.innerHTML = `${"Specie: "}${data.species}`;
        gender.innerHTML = `${"gender: "}${data.gender}`;
        error.innerHTML =`${''}`;
        }else if (usuario >= error2){
            renderimagen`<img${''}>`;
            error.innerHTML =`${"todavía no hay muchos personajes. ¡Intenta de nuevo!. Cantidad de personajes de la serie: "}${error2}`;
            id.innerHTML = `${"ID No encontrado"}`;
            names.innerHTML = `${"NAME No encontrado"}`;
            status.innerHTML = `${"STATUS No encontrado"}`;
            specie.innerHTML = `${"SPECIE No encontrado"}`;
            gender.innerHTML = `${"GENDER No encontrado"}`;
        } else {
            renderimagen`<img${''}>`;
            error.innerHTML =`${"Dato nulo. Dato debe ser mayor a 0 "}`;
            id.innerHTML = `${"ID No encontrado"}`;
            names.innerHTML = `${"NAME No encontrado"}`;
            status.innerHTML = `${"STATUS No encontrado"}`;
            specie.innerHTML = `${"SPECIE No encontrado"}`;
            gender.innerHTML = `${"GENDER No encontrado"}`;
        }
    })

}); 
    
    // .catch (error => {
    
    //  id.innerText = 'Error';
    // });
})
