function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") ===
      "Para seguir necesita poner su cantidad de integrantes",
    "validarIntegrantes no valido el valor no sea vacio"
  );

  console.assert(
    validarIntegrantes(101111) === "Este campo solo admite 10 integrantes",
    "validarIntegrantes no funciono cuando los integrantes fueron mayor a 10"
  );

  console.assert(
    validarIntegrantes("asdfasdf/.,;@#$") === "Este campo solo acepta numeros",
    "validarIntegrates no valido que el valor no sean signos o letras"
  );

  console.assert(
    validarIntegrantes("4") === "",
    "validarIntegrantes no funciono con un valor correcto"
  );
}

function probarValidarEdades() {
  console.assert(
    validarEdades("asdfasdf/.,;@#$") ===
      "Error: no se pudieron calcular las edades, ingrese un valor correcto",
    "validarEdades no valido que el valor no sean signos o letras"
  );

  console.assert(
    validarEdades("22") === "",
    "validarEdades no funciono con un valor correcto"
  );
}

function probarValidarSalarios() {
  console.assert(
    validarSalarios("asdfasdf/.,;@#$") ===
      "Error: no se pudieron calcular los salarios, ingrese un valor valido",
    "validarSalarios no valido que el valor no sea signos o letras"
  );

  console.assert(
    validarEdades("350000") === "",
    "validar Salarios no funciono con un valor correcto"
  );
}

probarValidarIntegrantes();
probarValidarEdades();
probarValidarSalarios();
