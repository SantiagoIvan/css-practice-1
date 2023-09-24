const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const closeMenu = document.getElementById("close");
menu.addEventListener("click", () => {
  /* 
        1- mostrar el menu desplegable
        2- esconder el menu
        3- cambiarlo por la X
        */

  nav.classList.toggle("nav--visible");
  menu.classList.toggle("menu--visible");
  closeMenu.classList.toggle("close-menu--visible");
});

closeMenu.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  menu.classList.toggle("menu--visible");
  closeMenu.classList.toggle("close-menu--visible");
});
