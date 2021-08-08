const menu = document.querySelector(".header__menu--span");
const menu_span = document.querySelector(".header__category-ul");

menu.addEventListener("click", function(){
    menu_span.classList.toggle("active");
});

