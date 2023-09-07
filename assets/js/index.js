//🆕 Hace que se muestre el menu de navegacion al hacer click en el icono de hamburguesa
const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector("#asideMenu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav_menu_visible");

    if(navMenu.classList.contains("nav_menu_visible")){
        navToggle.setAttribute("aria-lable", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})

