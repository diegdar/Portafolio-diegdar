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

// 🆕 Ajusta la velocidad del video en la cabecera
var video = document.getElementById("videoBackground");
video.playbackRate = 0.3; // Aquí puedes ajustar la velocidad de reproducción (0.5 es la mitad de la velocidad normal)
