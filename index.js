const menu = document.getElementById("menuId");
const nav = document.getElementById("navId");
const closeMenu = document.getElementById("closeMenuId");
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
