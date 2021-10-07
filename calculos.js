function obtenerMayorEdad (numeros) {
    let mayorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }
    return mayorNumero
}

function obtenerMenorEdad (numeros) {
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

function obtenerEdadPromedio (numeros) {
    let acumulador;
    for (let i =0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return (acumulador / numeros.length);
}
