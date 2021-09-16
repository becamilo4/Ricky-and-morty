"use strict";

var idField = document.getElementById('ricky');
var button = document.getElementById('abrir');
var id = document.getElementById('id');
var names = document.getElementById('name');
var status = document.getElementById('status');
var specie = document.getElementById('specie');
var gender = document.getElementById('gender');
var picture = document.getElementById('picture');
var total1 = document.getElementById('total');
var informacion_total = document.getElementById('informacion_total'); // const picture_error = document.getElementById('picture_error')

var picture3 = document.querySelector('.picture_error2');

function renderimagen(image1) {
  picture.setAttribute('src', image1);
} // function renderimagen2(image2){
//    picture_error.setAttribute('src',image2)
// }


var API = 'https://rickandmortyapi.com/api/character';
button.addEventListener('click', function () {
  usuario = idField.value;

  var personajes = function personajes() {
    var response1, cantidadpersonaje, response, personaje, total;
    return regeneratorRuntime.async(function personajes$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("".concat(API)));

          case 3:
            response1 = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response1.json());

          case 6:
            cantidadpersonaje = _context.sent;
            _context.next = 9;
            return regeneratorRuntime.awrap(fetch("".concat(API, "/").concat(usuario)));

          case 9:
            response = _context.sent;
            _context.next = 12;
            return regeneratorRuntime.awrap(response.json());

          case 12:
            personaje = _context.sent;
            total = cantidadpersonaje.info.count;

            if (usuario <= total && usuario > 0) {
              total1.innerHTML = "Total personajes ".concat(cantidadpersonaje.info.count);
              renderimagen(personaje.image);
              informacion_total.innerHTML = "";
              picture3.innerHTML = "";
              id.textContent = "ID: ".concat(personaje.id);
              names.innerHTML = "Nombre ".concat(personaje.name);
              status.innerHTML = "Status: ".concat(personaje.status);
              specie.innerHTML = "Specie: ".concat(personaje.species);
              gender.innerHTML = "gender: ".concat(personaje.gender);
            } else if (usuario >= total) {
              total1.innerHTML = "Toda via no hay tantos personajes. Ingrese otro valor";
              informacion_total.innerHTML = "Total personajes ".concat(total);
              picture3.innerHTML = "<picture><img class=\"picture_error\" src=\"https://rickandmortyapi.com/api/character/avatar/19.jpeg\" alt=\"Error\"> </picture>";
              renderimagen("");
              id.textContent = "";
              names.innerHTML = "";
              status.innerHTML = "";
              specie.innerHTML = "";
              gender.innerHTML = "";
            } else {
              total1.innerHTML = "Ingresa un valor mayor a 0";
              picture3.innerHTML = "<img class=\"picture_error\" src=\"https://rickandmortyapi.com/api/character/avatar/19.jpeg\" alt=\"Error\">";
              renderimagen("");
              id.textContent = "";
              names.innerHTML = "";
              status.innerHTML = "";
              specie.innerHTML = "";
              gender.innerHTML = "";
            }

            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            names.innerHTML = "error";

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 17]]);
  };

  personajes();
});