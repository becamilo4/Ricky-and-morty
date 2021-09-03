const idField = document.getElementById('ricky');
const button = document.getElementById('abrir');
const id = document.getElementById('id');
const names = document.getElementById('name');
const status = document.getElementById('status');
const specie = document.getElementById('specie');
const gender = document.getElementById('gender');
const picture = document.getElementById('picture');

function renderimagen(image1) {
    picture.setAttribute('src',image1);

}

const API = 'https://rickandmortyapi.com/api/character'


button.addEventListener('click',function(){
    usuario = idField.value;

    fetch(`${API}/${usuario}`)
    .then (response => response.json())
    .then (data =>{
        renderimagen(data.image);
        id.innerHTML = `${"ID: "}${data.id}`;
        names.innerHTML = `${"Name: "}${data.name}`;
        status.innerHTML = `${"Status: "}${data.status}`;
        specie.innerHTML = `${"Specie: "}${data.species}`;
        gender.innerHTML = `${"gender: "}${data.gender}`;
    })
    .catch (error => {
        species.innerHTML = "Dato no encontrado ";
    });
})
