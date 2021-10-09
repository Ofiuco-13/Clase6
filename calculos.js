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
    let acumulador = 0;
    for (let i =0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    const promedio = (acumulador / numeros.length);
    return promedio;
}

function obtenerMayorSalarioAnual (numeros) {
    let mayorSalarioAnual = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayorSalarioAnual) {
            mayorSalarioAnual = numeros[i];
        }
    }
    return mayorSalarioAnual;
}

function obtenerMenorSalarioAnual (numeros) {
    let menorSalarioAnual = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menorSalarioAnual) {
            menorSalarioAnual = numeros[i];
        }
    }
    return menorSalarioAnual;
}

function obtenerSalarioAnualPromedio (numeros) {
    let acumulador = 0;
    for (let i =0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    const promedio = (acumulador / numeros.length);
    return promedio;
}

function obtenerSalarioMensualPromedio (numeros) {
    let mayorSalarioAnual = obtenerMayorSalarioAnual(numeros);
    let menorSalarioAnual = obtenerMenorSalarioAnual(numeros);

    let salarioTotal = mayorSalarioAnual + menorSalarioAnual;

    return Math.floor(salarioTotal / 12);
}
