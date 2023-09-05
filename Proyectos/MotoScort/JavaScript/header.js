//🆕 Hace que se muestre el menu de navegacion al hacer click en el icono de hamburguesa
const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav_menu_visible");

    if(navMenu.classList.contains("nav_menu_visible")){
        navToggle.setAttribute("aria-lable", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})

//🆕 Mantiene el color del ultimo link cliqueado en la primera linea del menu de navegacion
// Obtenemos el href de la página actual
var currentPage = parent.window.location.href;
// Obtenemos el href de la pagina padre (pagina actual sin el enlace de anclaje)
var parentPage = parent.window.location.href.split('#')[0];

// Obtenemos todos los elementos del menú
var menuItems = document.querySelectorAll(".nav_menu a");

// Recorremos los elementos del menú y verificamos si el enlace coincide con la página actual
let long = menuItems.length;
for (var i = 0; i < long; i++) {
  // si el href del elemento del array coincide con la de la 'pagina padre', el padre tomara todos los valores del elemento  
  if (menuItems[i].href===(parentPage)) {
    parentPage = menuItems[i];
  // Cuando haya un elemento que coincida con la pagina actual, el elemento que teniamos guardado como 'pagina padre' le asignamos la clase 'itemActive' para que tome el foco con el color amarillo
  }if (menuItems[i].href.includes(currentPage)) {
    parentPage.classList.add('itemActive'); /* Cambia el color al elemento actual */
  }
}
