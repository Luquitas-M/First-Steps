(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {

        //Campos datos de contato

        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');
        var mensaje = document.getElementById('mensaje');


        var errorN = document.getElementById('errorN');
        var errorT = document.getElementById('errorT');
        var errorE = document.getElementById('errorE');
        var errorM = document.getElementById('errorM');

        nombre.addEventListener('blur', function() {
            if (this.value === '') {
                errorN.style.display = 'block';
                errorN.style.color = 'red';
                errorN.style.textalign = 'center';
                errorN.innerHTML = "  - El nombre es obligatorio";
                this.style.border = '1px solid red';
                errorN.style.border = '1px solid red';
            } else {
                errorN.style.display = 'none';
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
        telefono.addEventListener('blur', function() {
            if (this.value > 0) {
                errorT.style.display = 'none';
                this.style.border = '1px solid grey';
            } else {
                errorT.style.display = 'block';
                errorT.style.color = 'red';
                errorT.style.textalign = 'center';
                errorT.innerHTML = "  - Por favor ingrese un numero telefonico valido ";
                this.style.border = '1px solid red';
                errorT.style.border = '1px solid red';
            }
        });





    }) /**DON CONTENT LOADED */
})();