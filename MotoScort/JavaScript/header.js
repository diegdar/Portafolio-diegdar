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

//🆕 Mantiene el color del ultimo link clequeado 

const menuLinks = document.querySelectorAll('.nav_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Eliminar la clase 'clicked' de todos los enlaces
    menuLinks.forEach(link => {
      link.classList.remove('itemActive');
    });

    // Agregar la clase 'clicked' solo al enlace clicado
    this.classList.add('itemActive');
  });
});
