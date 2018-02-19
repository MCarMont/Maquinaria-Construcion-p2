$("#menuEmpleadoAlta").click(cargaAltaEmpleado);

function cargaAltaEmpleado() 
{
    // Oculto todos los formularios menos este
    $("form:not('#frmAltaEmpleado')").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaEmpleado').size() == 0) {
        $("<div>").appendTo('#formularios').load("altaEmpleado/frmAltaEmpleado.html",
            function() {
                $.getScript("altaEmpleado/frmAltaEmpleado.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaEmpleado').show("normal");
    }
}