"use strict";

var API = 'https://rickandmortyapi.com/api/character';
$main = document.querySelector(".main__container");
link1 = document.querySelector(".main__links");

function loadrickyandmorty(url) {
  var res, json, $template, prevLink, nextLink, i, _res, ricky, message, _message;

  return regeneratorRuntime.async(function loadrickyandmorty$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          $main.innerHTML = "<img class=\"loader\" src=\"../load/rings.svg\" alt=\"cargando\">";
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          json = _context.sent;
          $template = "";
          i = 0;

        case 10:
          if (!(i < json.results.length)) {
            _context.next = 30;
            break;
          }

          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(fetch(json.results[i].url));

        case 14:
          _res = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(_res.json());

        case 17:
          ricky = _context.sent;

          if (_res.ok) {
            _context.next = 20;
            break;
          }

          throw {
            status: _res.status,
            statusText: _res.statusText
          };

        case 20:
          $template += "\n                <div class=\"main__container--cards\"> \n                <figure>\n                  <img class=\"main__container-picture\" src=\"".concat(ricky.image, "\"alt=\"").concat(ricky.name, "\">\n                  <figcaption class=\"main__container-title\">Nombre: ").concat(ricky.name, "</figcaption>\n                </figure>\n                <lu class=\"main__container-lu\">\n                    <li class=\"main__container-category\">Id: ").concat(ricky.id, "</li>\n                    <li class=\"main__container-category\">Status: ").concat(ricky.status, "</li>\n                    <li class=\"main__container-category\">Species: ").concat(ricky.species, "</li>\n                    <li class=\"main__container-category\">Gender: ").concat(ricky.gender, "</li>\n                </lu>\n                </div>");
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](11);
          message = _context.t0.statusText || "Ocurrio un error";
          $template += "\n                <figure>\n                <figcaption>Error".concat(_context.t0.status, ":").concat(message, "</figcaption>\n                </figure>");

        case 27:
          i++;
          _context.next = 10;
          break;

        case 30:
          $main.innerHTML = $template;
          prevLink = json.info.prev ? "<a href=\"".concat(json.info.prev, "\">\u23EA</a>") : "";
          nextLink = json.info.next ? "<a href=\"".concat(json.info.next, "\">\u23E9</a>") : "";
          link1.innerHTML = prevLink + " " + nextLink;

          if (res.ok) {
            _context.next = 36;
            break;
          }

          throw {
            status: res.status,
            statusText: res.statusText
          };

        case 36:
          _context.next = 42;
          break;

        case 38:
          _context.prev = 38;
          _context.t1 = _context["catch"](0);
          _message = _context.t1.statusText || "Ocurrio un error";
          $main.innerHTML = "<p>Error".concat(_context.t1.status, ":").concat(_message, "</p>");

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 38], [11, 23]]);
}

document.addEventListener("DOMContentLoaded", function (e) {
  return loadrickyandmorty(API);
});
document.addEventListener("click", function (e) {
  if (e.target.matches(".main__links a")) {
    e.preventDefault();
    loadrickyandmorty(e.target.getAttribute("href"));
  }
});