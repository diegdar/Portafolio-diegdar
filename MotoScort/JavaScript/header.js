//🆕 Hace que se desplazase el menu de navegacion al hacer click en el icono de hamburguesa
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
// Obtenemos el enlace de la página actual
var currentPage = parent.window.location.href;

// Obtenemos todos los elementos del menú
var menuItems = document.getElementsByClassName("nav_menu");

// Recorremos los elementos del menú y verificamos si el enlace coincide con la página actual
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i].getElementsByTagName("a")[0];
  
  // Verificamos si el elemento <a> tiene el atributo href definido
  if (menuItem && menuItem.hasAttribute("href")) {
    var href = menuItem.getAttribute("href");

    // Verificamos si el enlace contiene el símbolo de anclaje #
    if (href.includes("#")) {
      var parentPage = href.split("#")[0];

      // Verificamos si la página padre coincide con la página actual
      if (currentPage.includes(parentPage)) {
        menuItem.classList.add("itemActive"); // Agregamos la clase 'itemActive' al elemento
      }
    }
  }
}//🆕 Mantiene el color del ultimo link cliqueado en la segundalinea del menu(subMenu) de navegacion
const links2ndLine = document.querySelectorAll('.nav_2ndLine a');

links2ndLine.forEach(link => {
    link.addEventListener('click', function() {
      // Eliminar la clase 'itemActive' de todos los enlaces
      links2ndLine.forEach(link => {
        link.classList.remove('itemActive');
      });
      // Agregar la clase 'itemActive' solo al enlace clicado
      this.classList.add('itemActive');
    });
  });
