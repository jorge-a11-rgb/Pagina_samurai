// objeto.metodo(json)

$("#formulario1").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtTelefono": {
            required: true,
            max: 99999999
        },
        "txtRepetirTelefono": {
            required: true,
            equalTo: '#id_txtTelefono'
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email!!!',
            email: 'No cumple formato'
        },
        "txtTelefono": {
            required: 'Ingrese Telefono!!!',
            min: 0
        },
        "txtRepetirTelefono": {
            required: 'Repita su telefono!!',
            equalTo: ' deben ser iguales!!!!'
        }
        "txtFechaNacimiento": {
            required: 'Debe ingresar fecha de nacimiento!!!',
            date: 'La fecha maxima permitida es 31-12-2010'
        }
    } //-->Fin de mensajes

});
