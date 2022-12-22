import axios from "axios";
const asignarRol = (idEmpleado, idPuesto) => {
  let rolEmpleado;

  if (
    idPuesto == "C46" ||
    idPuesto == "C23" ||
    idPuesto == "D34" ||
    idPuesto == "G31" ||
    idPuesto == "C76" ||
    idPuesto == "C79" ||
    idPuesto == "C77"
  ) {
    rolEmpleado = "SUPERVISOR";
  } else if (
    idPuesto == "F17" ||
    idPuesto == "V42" ||
    idPuesto == "V43" ||
    idPuesto == "V35"
  ) {
    rolEmpleado = "CAJERO";
  }

  const body = {
    Source: "PetcoIntegration",
    Data: {
      Request: {
        ImportSettings: {
          RoleSetting: "Code",
          EmployeeSetting: "LoginName",
        },
        RoleEmployees: [
          {
            EmployeeIdentifier: idEmpleado,
            RoleIdentifier: rolEmpleado,
            Delete: true,
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
      "https://petco-test1-na-chq.teamworkinsight.com/chqapi/import/role-employee",
      body,
      config
    )
    .then((res) => res.data);
};

export default asignarRol;
