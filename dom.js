document.querySelector('#siguiente-paso').onclick = function () {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    
    mostrarBotonCalculo(cantidadIntegrantes);
    ocultarBotonResetear();
    borrarIntegrantesAnteriores();
    generarIntegrantes(cantidadIntegrantes);
    mostrarBotonResetear();

    return false;
}

document.querySelector('#calcular').onclick = function () {
    const numeros = obtenerEdades();
    
    ocultarBotonCalculo();
    document.querySelector('#mayor-edad').textContent = 'La edad mayor es ' + obtenerMayorEdad(numeros);
    document.querySelector('#menor-edad').textContent = 'La edad menor es ' + obtenerMenorEdad(numeros);
    document.querySelector('#promedio-edad').textContent = 'La edad promedio es ' + obtenerEdadPromedio(numeros);
    
    mostrarAnalisis();
    mostrarBotonAgregar();
}

document.querySelector('#resetear').onclick = resetear;

document.querySelector('#agregar-input').onclick  = function () {
     generarSalario(); 
     mostrarBotonCalcularSalarios();
}

document.querySelector('#calcular-salarios').onclick = function () {
    const numeros = obtenerSalarios();

    document.querySelector('#mayor-salario-anual').textContent = 'Mayor salario anual: ' + obtenerMayorSalarioAnual(numeros);
    document.querySelector('#menor-salario-anual').textContent = 'Menor salario anual: ' + obtenerMenorSalarioAnual(numeros);
    document.querySelector('#salario-anual-promedio').textContent = 'Salario anual promedio: ' + obtenerSalarioAnualPromedio(numeros);
    document.querySelector('#salario-mensual-promedio').textContent = 'Salario mensual promedio: ' + obtenerSalarioMensualPromedio(numeros);
}

function mostrarBotonCalculo (cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        document.querySelector('#calcular').className = ''; 
    }
}

function borrarIntegrantesAnteriores () {
    const $integrantes = document.querySelectorAll('.integrante')
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function generarIntegrantes (cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        generarIntegrante(i);
    }
}

function generarIntegrante (i) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante # ' + (i + 1);

    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function obtenerEdades () {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];

    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function mostrarAnalisis () {
    document.querySelector('#analisis').className = '';
}

function resetear () {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarAnalisis();
    ocultarBotonResetear();
    ocultarBotonAgregar();
    borrarSalariosAnteriores();
    ocultarBotonCalcularSalarios();
    ocultarResultadoSalarios();
}

function generarSalario () {
    
    const $div = document.createElement('div');
    $div.className = 'salario'

    const $label = document.createElement('label');
    $label.textContent = 'Salario # ';

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = 'Ej: 350000'
    $input.min = '0';

    $div.appendChild($label);
    $div.appendChild($input);

    const $salarios = document.querySelector('#salarios');
    $salarios.appendChild($div);
}

function obtenerSalarios () {
    const $salarios = document.querySelectorAll('.salario input');
    const salarios = [];

    for (let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value));
    }
    return salarios;
}

function borrarSalariosAnteriores () {
    const $salarios = document.querySelectorAll('.salario')
    for (let i = 0; i < $salarios.length; i++) {
        $salarios[i].remove();
    }
}


function ocultarBotonCalculo () {
    document.querySelector('#calcular').className = 'oculto';
}

function ocultarAnalisis () {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarBotonResetear () {
    document.querySelector('#resetear').className = '';
}

function ocultarBotonResetear () {
    document.querySelector('#resetear').className = 'oculto';
}

function mostrarBotonAgregar () {
    document.querySelector('#agregar-input').className = '';
}

function ocultarBotonAgregar () {
    document.querySelector('#agregar-input').className = 'oculto';
}

function mostrarBotonCalcularSalarios () {
    document.querySelector('#calcular-salarios').className = '';
}

function ocultarBotonCalcularSalarios () {
    document.querySelector('#calcular-salarios').className = 'oculto';
}

function ocultarResultadoSalarios () {
    document.querySelector('#analisis-salarios').className = 'oculto';
}
