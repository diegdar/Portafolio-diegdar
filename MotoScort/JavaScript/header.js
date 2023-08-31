// Hace que se desplazase el menu de navegacion al hacer click en el icono de hamburguesa
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
// /* Hace que un elemento del menú de navegación mantenga un color a modo de foco cuando se hace clic en él, hasta que se cambia a otro. */
    let menuLinks = document.querySelectorAll(".nav_menu a ");
    let long = menuLinks.length;
    for (var i = 0; i < long; i++) {
        // a cada elemento del array se le inserta el evento 'click' con la funcion 'changeColor'
        menuLinks[i].addEventListener("click", changeColor);
    }

    function changeColor() {
        for (var i = 0; i < menuLinks.length; i++) {
            // elimina primero todas las clases para poder asignarsela al siguiente elemento que tendra el foco
            menuLinks[i].classList.remove("itemActive");
        }
        // Asigna la clase al elemento que tendra el foco actualmente
        element.classList.add(this);
    }