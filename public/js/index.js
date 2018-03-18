var baseUrl = "http://ingresar.mocklab.io/ingresar/cliente/{clientId}/control-acceso/dni/{dni}/";

function validarUsuario() {

    // Guardamos el DNI en una variable.

    var dni = document.getElementById("dni").value;

    console.log('Verificando usuario con DNI: ' + dni);

    // Validar si el DNI es valido (Hacer)



    // Modificamos el cliente y el dni en baseUrl para hacer la llamada a la API REST.

    var newUrl = baseUrl.replace("{clientId}", "1234").replace("{dni}", dni);

    console.log('URL: ' + newUrl);

    // Hacemos el llamado a la API REST con la url generada anteriormente.

    llamarExternalApi(newUrl).then(function (respuesta) {
        mostrarRespuesta(respuesta);
    })
}

function mostrarRespuesta(respuesta) {
    console.log(respuesta.message);

    var modal = $('#modal-respuesta');
    var modalMensajeDiv = $("#mensaje");
    var msj = "<h1>" + respuesta.message + "</h1>";

    modalMensajeDiv.append(msj);

    // Mostramos el mensaje
    modal.modal('show');

    // Despues de 5 segundos ocultamos el modal y reseteamos el dni. (mover a otra funcion)
    setTimeout(function () { modal.modal('hide'); $("#dni").val(""); modalMensajeDiv.empty();}, 6000);
}

function llamarExternalApi(url) {
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (respuesta) {
        return respuesta;
    }).catch(function (e) {
        alert("Error intentando comunicarse con el servidor. Vuelva a intentar: " + e);
    });
}