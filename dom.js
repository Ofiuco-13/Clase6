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

function borrarIntegrantesAnteriores () {
    const $integrantes = document.querySelectorAll('.integrante')
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function mostrarBotonCalculo (cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        document.querySelector('#calcular').className = ''; 
    }
}

document.querySelector('#siguiente-paso').onclick = function () {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    
    mostrarBotonCalculo(cantidadIntegrantes);
    borrarIntegrantesAnteriores();
    generarIntegrantes(cantidadIntegrantes);
    
    return false;
}

function obtenerEdades () {
    const $integrantes = document.querySelector('.integrante input');
    const edades = [];

    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}
