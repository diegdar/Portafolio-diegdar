contRespCorrect =0;
contRespIncorrect =0;
contRespNsc=0;
arrayAcertadas=[];
arrayIncorrectas=[];
barraProgres = document.getElementById("barraProgreso");

// Las posiciones de los numeros que son mayores a cero son las respuestas CORRECTAS y a la vez el nº de pregunta.
posicionCorrectas =   [0,1,0,0,0,2,3,0,0,4,0,0,0,5,0];
// Las posiciones de los numeros que son mayores a cero son las respuestas INCORRECTAS y a la vez el nº de pregunta.
posicionIncorrectas = [1,0,1,2,2,0,0,3,3,0,4,4,5,0,5];

function IniciarTest(){
    // LLama a la funcion inicioTiempo cada 1 segundo
    temps = setInterval(inicioTiempo,1000);
    // Deshabilita el boton 'botonIniciarTest'
    document.getElementById('botonIniciarTest').disabled = true;
    // Habilita el boton 'botonCalcularResultado'
    document.getElementById('botonCalcularResultado').disabled = false;
    // habilita los botones 'radio'
        radios = document.getElementsByClassName("respuestas");

        for(i=0; i<radios.length; i++){
            radios[i].disabled = false;
        }

}

function calcularResultado(){
    // LLama a 'clearInterval' para parar a 'setInterval' y ocultar aviso cuenta regresiva
    finTiempo();        

    // Deshabilita el boton 'botonIniciarTest'
    document.getElementById('botonIniciarTest').disabled = true;
    // Deshabilita el boton 'botonCalcularResultado'
    document.getElementById('botonCalcularResultado').disabled = true;
    // Deshabilita los botones 'radio'
        radios = document.getElementsByClassName("respuestas");
        for(i=0; i<radios.length; i++){
            radios[i].disabled = true;
        }

    opciones = document.getElementsByClassName("respuestas");
    cantidadPreguntas = 5;
    longArray = opciones.length;
    for(i=0; i<longArray;i++){
        prueba = opciones[i].checked;
        prueba2 = Number(opciones[i].value);

        if(opciones[i].checked && opciones[i].value==posicionCorrectas[i]){
            contRespCorrect++;
            arrayAcertadas.push(posicionCorrectas[i]);

        }else if(opciones[i].checked && opciones[i].value!=posicionCorrectas[i]){
            contRespIncorrect++;
            arrayIncorrectas.push(posicionIncorrectas[i]);
        }
    }
    contRespNsc= cantidadPreguntas-(contRespCorrect + contRespIncorrect);
    // le dara el valor de las resp. correctas a la barra azul de progreso.
    barraProgreso.setAttribute("value", contRespCorrect);

    document.getElementById("respCorrect").innerHTML = contRespCorrect;
    document.getElementById("respIncorrect").innerHTML = contRespIncorrect;
    document.getElementById("respNsnc").innerHTML = contRespNsc;

        document.getElementById("numRespCorrect").innerHTML = arrayAcertadas;

        document.getElementById("numRespIncorrect").innerHTML = arrayIncorrectas;
    // ----------------------

    document.getElementById("porcentCorrect").innerHTML = `${(contRespCorrect*100/cantidadPreguntas).toFixed(0)}%`;

    document.getElementById("soluRespCorrect").innerHTML = 'b, c, a, a, b';

    // Mostrar tabla resultados
    let tablaResult = document.getElementById("tablaResult");

    tablaResult.classList.toggle("visible");

}

contador = 60;
function inicioTiempo(){
    // Muestra aviso cuenta regresiva
    document.querySelector(".cuentRegresiva").innerHTML = `Time left: ${contador} seconds`;
    // Disminuye en una unidad cada vez que es llamada esta funcion por el 'setInterval'
    contador--;
    if(contador == 0){

        // Muestra aviso termino tiempo
        let finTiempo = document.querySelector('.oculto');
        finTiempo.classList.toggle('visible');

        // Deshabilita los botones 'radio'
        radios = document.getElementsByClassName("respuestas");
        for(i=0; i<radios.length; i++){
            radios[i].disabled = true;
        }
        // Llama a la funcion 'calcularResultado()' para que muestre los resultados cuando se ha terminado el tiempo
        calcularResultado()            

        // LLama a 'clearInterval' para parar a 'setInterval' y ocultar aviso cuenta regresiva
        finTiempo();            

    }
}

function finTiempo(){
    // detiene la variable 'temps' que contiene el 'setInterval' cuando la cuenta regresiva llegue a 0
    clearInterval(temps);     

    // Oculta aviso cuenta regresiva
    cuentaRegre = document.querySelector('.cuentRegresiva');
    cuentaRegre.classList.toggle('oculto');

}

