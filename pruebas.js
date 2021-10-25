function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") === "Para seguir necesita poner su cantidad de integrantes",
    "validarIntegrantes no valido el valor no sea vacio"
  );

  console.assert(
    validarIntegrantes(101111) === "Este campo solo admite 100 integrantes",
    "validarIntegrantes no funciono cuando los integrantes fueron mayor a 100"
  );

  console.assert(
    validarIntegrantes("asdfasdf/.,;@#$") === "Este campo solo acepta numeros",
    "validarIntegrates no valido que el valor no sean signos o letras"
  );

  console.assert(
    validarIntegrantes("4") === "",
    "validarIntegrantes no funciono con un valor valido"
  );
}

