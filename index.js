const cargaEmpleado = [
  {
    idEmpleado: "84918",
    estatus: "A",
    tienda: "7112",
    nombre: "ARLETH GIOVANNA",
    apellido: "HERNANDEZ LARA",
    idPuesto: "F17",
    puesto: "VENDEDOR",
  },
  {
    idEmpleado: "84918",
    estatus: "C",
    tienda: "7112",
    nombre: "GERARDO",
    apellido: "GARCIA LARA",
    idPuesto: "F18",
    puesto: "ANALISTA",
  },
  {
    idEmpleado: "84918",
    estatus: "D",
    tienda: "7112",
    nombre: "JUAN",
    apellido: "PEREZ LARA",
    idPuesto: "F18",
    puesto: "CONTADOR",
  },
];

cargaEmpleado.forEach((element) => {
  if (element.estatus === "A") {
    console.log("Creación de usuario");
  } else if (element.estatus === "C") {
    console.log("Cambiara de Tienda");
  } else if (element.estatus === "D") {
    console.log("Se eliminara el Usuario");
  }
});
