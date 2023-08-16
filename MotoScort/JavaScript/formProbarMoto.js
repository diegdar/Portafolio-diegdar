// FORM PROBAR MOTO ---------------- 
    // Valida si hay texto dento de la caja
        let nombre = new LiveValidation ('nombre');
        nombre.add(Validate.Presence);
        let apellidos = new LiveValidation ('apellidos');
        apellidos.add(Validate.Presence);
        let email = new LiveValidation ('email');
        email.add(Validate.Presence);
        let reptEmail = new LiveValidation ('reptEmail');
        reptEmail.add(Validate.Presence);
    // Comprueba el formato email
            email.add(Validate.Email);
            reptEmail.add(Validate.Email);
    // Comprueba coincidencia repeticion email 
        let confiEmail = new LiveValidation('reptEmail', { validMesage: "Valid!"});
        confiEmail.add(Validate.Confirmation, {match: 'email'});
    // Comprueba que se haya seleccionado una opcion
        let poblaciones = new LiveValidation ('poblaciones');
        poblaciones.add(Validate.Exclusion, { within: ['0'], failureMessage: "Selecciona un valor!"});
    // Valida si hay texto dento de la caja y haya como maximo entre 3 y 200 caracteres
        let descripcion = new LiveValidation ('descripcion');
        descripcion.add(Validate.Presence);
        descripcion.add(Validate.Length, {minimum: 3, maximum: 200});
    // Valida que este seleccionado el ckeckbox de acepto Proteccion de Datos
    let aceptoProteccionDatos = new LiveValidation('aceptoProteccionDatos', {validMessage: "OK!"});
    aceptoProteccionDatos.add(Validate.Acceptance);

    // Habilita o Deshabilita el boton enviar si el usuario le ha dado click al checkbox
    function activacionEnviar(){
        checkEnviarDatos = document.getElementById("aceptoProteccionDatos");
        if(checkEnviarDatos.checked){
            document.getElementById('enviarDatos').disabled = false;
        }else{
            document.getElementById('enviarDatos').disabled = true;
        }
    }    

    function validarSexo(){
        if (!document.querySelector('input[name="sexo"]:checked')) 
            {
            alert('Hay que rellenar los campos de genero!');
            return false; //el form no se envía
        }else { //el form se enviará
        btn_enviar=document.getElementById("enviarDatos");
        btn_enviar.addEventListener("click", function () {
            btn_enviar.disabled = true;
            btn_enviar.value = 'Enviando ...';    
            btn_enviar.form.submit();       
            return true;
        });
    }
    
}

