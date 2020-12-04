(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {

        //Campos datos de contato

        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');
        var mensaje = document.getElementById('mensaje');

        //Boton envio

        var enviar = document.getElementById('enviar');
        var error = document.getElementById('error');
        var errorE = document.getElementById('errorE');

        nombre.addEventListener('blur', function() {
            if (this.value === '') {
                error.style.display = 'block';
                error.style.color = 'red';
                error.style.textalign = 'center';
                error.innerHTML = "  - El nombre es obligatorio";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';
            } else {
                error.style.display = 'none';
                this.style.border = '1px solid grey';
            }
        });



        email.addEventListener('blur', function() {
            if (this.value.indexOf("@") > -1) {
                errorE.style.display = 'none';
                this.style.border = '1px solid grey';
            } else {
                errorE.style.display = 'block';
                errorE.style.color = 'red';
                errorE.style.textalign = 'center';
                errorE.innerHTML = "  - Debes tener al menos un @";
                this.style.border = '1px solid red';
                errorE.style.border = '1px solid red';
            }
        });

    }) /**DON CONTENT LOADED */
})();