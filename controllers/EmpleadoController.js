import altaEmpleado from "../helpers/altaEmpleado.js";
import asignarRol from "../helpers/asignarRol.js";
import cambioTienda from "../helpers/cambiarTienda.js";
import desactivarEmpleado from "../helpers/desactivarEmpleado.js";

const registrar = async (req, res) => {
  let accion, segundaAccion, texto;
  const {
    cargaEmpleados: {
      idEmpleado,
      estatus,
      tienda,
      nombre,
      apellido,
      idPuesto,
      puesto,
    },
  } = req.body;

  try {
    if (estatus === "A") {
      accion = altaEmpleado(
        idEmpleado,
        nombre,
        apellido,
        idPuesto,
        puesto,
        tienda
      );
      segundaAccion = asignarRol(idEmpleado, idPuesto);
      texto = `${nombre} dado de alta con el puesto de: ${puesto}, en la tienda: ${tienda}`;
    } else if (estatus === "C") {
      accion = cambioTienda(idEmpleado, tienda);
      texto = `Empleado con el id ${idEmpleado} ha sido cambiado a la tienda ${tienda}`;
    } else if (estatus === "D") {
      accion = desactivarEmpleado(idEmpleado);
      texto = `Empleado con el id: ${idEmpleado} ha sido desactivado`;
    }

    res.status(200).json({
      replyCode: 200,
      replyText: "Ok",
      texto,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const pintar = (req, res) => {
  let holamundo = {
    Id: Math.ceil(Math.random() * 123456),
    hola: "mundo",
    token: Math.ceil(Math.random() * 85432179 + 1111111 * 25000000),
    replyCode: 200,
    replyText: "conectado",
  };

  res.json(holamundo);
};

export { registrar, pintar };
