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

links = document.getElementsByTagName('a');
longArray = links.length;
for (var i = 0; i < longArray; i++) {
    if (links[i].getAttribute("href").includes("MotoScort")) {
        // Impide que los links se abran en el iframe
        links[i].setAttribute("target", "_parent");
    }else{
        // hace que los links que son propios de la pagina abran en una pestaña
        links[i].setAttribute("target", "_blank"); 
    }
}
//  links = document.getElementsByTagName("a");
//  longArray = links.length;
// for (var i = 0; i < longArray; i++) {
//         links[i].setAttribute("target", "_parent");     
// }