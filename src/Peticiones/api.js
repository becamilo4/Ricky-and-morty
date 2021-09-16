const idField = document.getElementById('ricky');
const button = document.getElementById('abrir');
const id = document.getElementById('id');
const names = document.getElementById('name');
const status = document.getElementById('status');
const specie = document.getElementById('specie');
const gender = document.getElementById('gender');
const picture = document.getElementById('picture');
const total1 = document.getElementById('total');
const informacion_total = document.getElementById('informacion_total')
// const picture_error = document.getElementById('picture_error')
const picture3 = document.querySelector('.picture_error2')

function renderimagen(image1) {
    picture.setAttribute('src',image1);
    
}

// function renderimagen2(image2){
//    picture_error.setAttribute('src',image2)
// }

const API = 'https://rickandmortyapi.com/api/character'


button.addEventListener('click',function(){

    usuario = idField.value;
    const personajes = async () =>{
        try{
            const response1 = await fetch(`${API}`)
            const cantidadpersonaje = await response1.json()
            const response = await fetch(`${API}/${usuario}`);
            const personaje = await response.json();
            const total = cantidadpersonaje.info.count;
            if (usuario <= total && usuario > 0) {
            total1.innerHTML = `Total personajes ${cantidadpersonaje.info.count}`;
            renderimagen(personaje.image);
            informacion_total.innerHTML = "";
            picture3.innerHTML =``;
            id.textContent = `${"ID: "}${personaje.id}`;
            names.innerHTML = `Nombre ${personaje.name}`;
            status.innerHTML = `${"Status: "}${personaje.status}`;
            specie.innerHTML = `${"Specie: "}${personaje.species}`;
            gender.innerHTML = `${"gender: "}${personaje.gender}`;
            }else if((usuario >= total)){
                total1.innerHTML = `Toda via no hay tantos personajes. Ingrese otro valor`;
                informacion_total.innerHTML = (`Total personajes ${total}`)
                picture3.innerHTML=`<picture><img class="picture_error" src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="Error"> </picture>`;
                renderimagen(``);
                id.textContent = ``;
                names.innerHTML = ``;
                status.innerHTML = ``;
                specie.innerHTML = ``;
                gender.innerHTML = ``;

            }
            else  { 
            total1.innerHTML = `Ingresa un valor mayor a 0`;
            picture3.innerHTML=`<img class="picture_error" src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="Error">`;
            renderimagen(``);
            id.textContent = ``;
            names.innerHTML = ``;
            status.innerHTML = ``;
            specie.innerHTML = ``;
            gender.innerHTML = ``;
            }
        }catch{
            names.innerHTML = "error";
        }
    }
    
    personajes()


}); 


    
