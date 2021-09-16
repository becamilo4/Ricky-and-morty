let API = 'https://rickandmortyapi.com/api/character';
$main = document.querySelector(".main__container");
link1 = document.querySelector(".main__links");

async function loadrickyandmorty(url){
    try{
        $main.innerHTML=`<img class="loader" src="../load/rings.svg" alt="cargando">`;
        let res = await fetch(url),
        json = await res.json(),
        $template = "",
        prevLink,
        nextLink;

        for(let i =0; i< json.results.length; i++){
            try{

                let res = await fetch(json.results[i].url),
                ricky = await res.json();

                if(!res.ok)throw{status:res.status,statusText:res.statusText}

                $template +=`
                <div class="main__container--cards"> 
                <figure>
                  <img class="main__container-picture" src="${ricky.image}"alt="${ricky.name}">
                  <figcaption class="main__container-title">Nombre: ${ricky.name}</figcaption>
                </figure>
                <lu class="main__container-lu">
                    <li class="main__container-category">Id: ${ricky.id}</li>
                    <li class="main__container-category">Status: ${ricky.status}</li>
                    <li class="main__container-category">Species: ${ricky.species}</li>
                    <li class="main__container-category">Gender: ${ricky.gender}</li>
                </lu>
                </div>`
                
            }catch(err){
                let message = err.statusText || "Ocurrio un error";
                $template +=`
                <figure>
                <figcaption>Error${err.status}:${message}</figcaption>
                </figure>`
            }
            
        }

       

        $main.innerHTML = $template;

        prevLink = json.info.prev ? `<a href="${json.info.prev}">⏪</a>`:"";
        nextLink = json.info.next ?  `<a href="${json.info.next}">⏩</a>`:"";
        link1.innerHTML = prevLink + " " + nextLink;

        if(!res.ok)throw{status:res.status,statusText:res.statusText}

    }catch(err){
        let message = err.statusText || "Ocurrio un error";
        $main.innerHTML = `<p>Error${err.status}:${message}</p>`;
    }

}


document.addEventListener("DOMContentLoaded",e =>loadrickyandmorty(API));
document.addEventListener("click", e=>{
    if(e.target.matches(".main__links a")){
        e.preventDefault();
        loadrickyandmorty(e.target.getAttribute("href"));
    }
})