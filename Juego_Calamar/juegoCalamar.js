function juegoAleatorio(){
    aleatorio = Math.round(Math.random()*10);

    i=3;
    intentos = 0;
    do{
        numUsuario = Number( prompt(`Dime un numero del 1 al 10`, `tienes ${i} intentos.`))
        intentos++;

        if(isNaN(numUsuario)|| (numUsuario<=0 || numUsuario>10) ){
            alert("Has introducido mal los datos, recuerda que debe ser un numero entre 1 y 10");
        }else if(numUsuario!=aleatorio && i>1){
            if(numUsuario>aleatorio){
                alert("El numero es menor. Intentalo de nuevo.")
            }else if(numUsuario<aleatorio){
                alert("El numero es mayor. Intentalo de nuevo.")
            }
        }else if(numUsuario==aleatorio){
            alert("En hora buena. HAS ACERTADO!");
            break;
        }
        i--;
    }while(i>0 && numUsuario!=aleatorio);

    if(numUsuario!=aleatorio){
        alert("Has superado el numero máximo de intentos. GAME OVER!, en unos instantes iran mis secuases a por ti, muahahaha");
        document.getElementById("imagenGif").src = "Muerto.webp";

    }

    document.getElementById("intentos").innerHTML = `intentos: ${intentos}`;
    document.getElementById("numeroAleatorio").innerHTML = `Nº Aleatorio: ${aleatorio}`;
}

function estiloColorFondo(estilo){
    if(estilo==1){
        document.body.style.backgroundColor="black";
        document.getElementById("encabezado").style.color="white";
        document.getElementById("texto").style.color="white";
        document.getElementById("textFondo").style.color="white";
    }else if(estilo==2){
        document.body.style.backgroundColor="white";
        document.getElementById("encabezado").style.color="black";
        document.getElementById("texto").style.color="black";
        document.getElementById("textFondo").style.color="black";
    }
}
