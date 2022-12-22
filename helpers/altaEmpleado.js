import generatePassword from "./generarPassword.js";
const password = generatePassword();
import axios from "axios";

const altaEmpleado = (
  idEmpleado,
  nombre,
  apellido,
  idPuesto,
  puesto,
  tienda
) => {
  const body = {
    Source: "PetcoIntegration",
    Data: {
      Request: {
        Settings: {
          IsPasswordHashed: false,
          LocationSetting: "Code",
        },
        Employees: [
          {
            LoginName: idEmpleado,
            FirstName: nombre,
            LastName: apellido,
            NickName: nombre.substring(0, 1) + apellido.substring(0, 6),
            JobTitle: puesto,
            JobId: idPuesto,
            Locations: [tienda],
            IsActive: true,
            Type: "Employee",
            password: password,
          },
        ],
      },
    },
  };

  const config = {
    headers: {
      ApiKey: "4a326abc-a146-4d9c-bdec-c48d5a5c312a",
    },
  };

  axios
    .post(
      "https://petco-test1-na-chq.teamworkinsight.com/chqapi/import/employee",
      body,
      config
    )
    .then((res) => res.data);
};

export default altaEmpleado;
