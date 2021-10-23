document.querySelector("#siguiente-paso").onclick = function () {
  const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  //validarFormulario();
  mostrarBotonCalculo(cantidadIntegrantes);
  ocultarBotonResetear();
  borrarIntegrantesAnteriores(cantidadIntegrantes);
  generarIntegrantes(cantidadIntegrantes);
  mostrarBotonResetear(cantidadIntegrantes);

  return false;
};

document.querySelector("#calcular").onclick = function () {
  const numeros = obtenerEdades();

  ocultarBotonCalculo();
  document.querySelector("#mayor-edad").textContent =
    "La edad mayor es " + obtenerMayorEdad(numeros);
  document.querySelector("#menor-edad").textContent =
    "La edad menor es " + obtenerMenorEdad(numeros);
  document.querySelector("#promedio-edad").textContent =
    "La edad promedio es " + obtenerEdadPromedio(numeros);

  mostrarAnalisis();
  mostrarBotonAgregar();
};

document.querySelector("#resetear").onclick = resetear;

document.querySelector("#agregar-input").onclick = function () {
  generarSalario();
  mostrarBotonCalcularSalarios();
};

document.querySelector("#calcular-salarios").onclick = function () {
  const salarios = obtenerSalarios();

  document.querySelector("#mayor-salario-anual").textContent =
    "Mayor salario anual: " + obtenerMayorSalarioAnual(salarios);
  document.querySelector("#menor-salario-anual").textContent =
    "Menor salario anual: " + obtenerMenorSalarioAnual(salarios);
  document.querySelector("#salario-anual-promedio").textContent =
    "Salario anual promedio: " + obtenerSalarioAnualPromedio(salarios);
  document.querySelector("#salario-mensual-promedio").textContent =
    "Salario mensual promedio: " + obtenerSalarioMensualPromedio(salarios);
};

function mostrarBotonCalculo(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    document.querySelector("#calcular").className = "";
  }
}

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll(".integrante");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function generarIntegrantes(cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    generarIntegrante(i);
  }
}

function generarIntegrante(i) {
  const $div = document.createElement("div");
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "Edad del integrante # " + (i + 1);

  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector("#integrantes");
  $integrantes.appendChild($div);
}

function obtenerEdades() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];

  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

function mostrarAnalisis() {
  document.querySelector("#analisis").className = "";
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarAnalisis();
  ocultarBotonResetear();
  ocultarBotonAgregar();
  borrarSalariosAnteriores();
  ocultarBotonCalcularSalarios();
  ocultarResultadoSalarios();
}

function generarSalario() {
  const $div = document.createElement("div");
  $div.className = "salario";

  const $label = document.createElement("label");
  $label.textContent = "Salario # ";

  const $input = document.createElement("input");
  $input.type = "number";
  $input.placeholder = "Ej: 350000";
  $input.min = "0";

  $div.appendChild($label);
  $div.appendChild($input);

  const $salarios = document.querySelector("#salarios");
  $salarios.appendChild($div);
}

function obtenerSalarios() {
  const $salarios = document.querySelectorAll(".salario input");
  const salarios = [];

  for (let i = 0; i < $salarios.length; i++) {
    salarios.push(Number($salarios[i].value));
  }
  return salarios;
}

function borrarSalariosAnteriores() {
  const $salarios = document.querySelectorAll(".salario");
  for (let i = 0; i < $salarios.length; i++) {
    $salarios[i].remove();
  }
}

function validarFormulario() {
    
}

function validarIntegrantes(integrantes) {
  if (integrantes === 0) {
    return "Para seguir necesita poner su cantidad de integrantes";
  }

  if (integrantes > 100) {
    return "Este campo solo admite 100 integrantes";
  }

  if (integrantes === "") {
    return "Ingrese su cantidad de integrantes para seguir";
  }

  if (!/^[0-9]+$/i.test(integrantes)) {
    return "Este campo solo acepta numeros";
  }

  return "";
}

function validarEdades(edades) {
  if (!/[0-9]+/.test(edades)) {
    return "Error: no se pudieron calcular las edades, ingrese un valor valido";
  }

  return "";
}

function validarSalarios(salarios) {
  if (!/[0-9]+/.test(salarios)) {
    return "Error: no se pudieron calcular los salarios, ingrese un valor valido";
  }

  if (salarios === 0) {
    return "Error: el salario no puede valer 0";
  }

  return "";
}

function ocultarBotonCalculo() {
  document.querySelector("#calcular").className = "oculto";
}

function ocultarAnalisis() {
  document.querySelector("#analisis").className = "oculto";
}

function mostrarBotonResetear(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    document.querySelector("#resetear").className = "";
  }
}

function ocultarBotonResetear() {
  document.querySelector("#resetear").className = "oculto";
}

function mostrarBotonAgregar() {
  document.querySelector("#agregar-input").className = "";
}

function ocultarBotonAgregar() {
  document.querySelector("#agregar-input").className = "oculto";
}

function mostrarBotonCalcularSalarios() {
  document.querySelector("#calcular-salarios").className = "";
}

function ocultarBotonCalcularSalarios() {
  document.querySelector("#calcular-salarios").className = "oculto";
}

function ocultarResultadoSalarios() {
  document.querySelector("#analisis-salarios").className = "oculto";
}
