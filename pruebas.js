function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") === "Ingrese su cantida de integrantes para seguir",
    "validarIntegrantes no valido el valor no sea vacio"
  );

  console.assert(
    validarIntegrantes("0") ===
      "Para seguir necesita poner su cantidad de integrantes",
    "validarIntegrantes no valido que el valor no sea 0"
  );

  console.assert(
    validarIntegrantes("101") === "Este campo solo admite 100 integrantes",
    "validarIntegrantes no funciono cuando los integrantes fueron mayor a 100"
  );

  console.assert(
    validarIntegrantes("asdfasdf././.") === "Este campo solo acepta numeros",
    "validarIntegrates no valido que el valor no sean signos o letras"
  );

  console.assert(
    validarIntegrantes("4") === "",
    "validarIntegrantes no funciono con un valor valido"
  );
}

function probarValidarEdades() {
  console.assert(
    validarEdades("") === "Ingrese alguna edad para continuar",
    "validarEdades no valido que el parametro no sea vacio"
  );

  console.assert(
    validarEdades("abc/.,@#$%") ===
      "Error: no se pudieron calcular las edades, ingrese un valor valido",
    "validarEdadIntegrante no valido que el campo no sean signos ni letras"
  );

  console.assert(
    validarEdades("22") === "",
    "validarEdades no funciono con un parametro valido"
  );
}

function probarValidarSalarios() {
  console.assert(
    validarSalarios("abc/.,@#$%") ===
      "Error: no se pudieron calcular los salarios, ingrese un valor valido",
    "validarSalarios no valido que el campo no sean signos ni letras"
  );

  console.assert(
    validarSalarios("0") === "Error: el salario no puede valer 0",
    "validarSalarios no valido que el campo no sea 0"
  );

  console.assert(
    validarSalarios("350000") === "",
    "validarSalarios no funciono con un parametro valido"
  );
}

probarValidarIntegrantes();
probarValidarEdades();
probarValidarSalarios();
