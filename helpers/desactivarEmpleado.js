import axios from "axios";

const desactivarEmpleado = (idEmpleado) => {
  let datos = {
    Source: "PetcoIntegration",

    Data: {
      Request: {
        Settings: { IsPasswordHashed: false, LocationSetting: "Code" },
        Employees: [{ LoginName: idEmpleado, IsActive: false }],
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
      datos,
      config
    )
    .then((response) => {
      console.log("Empleado Eliminado");
    })
    .catch(function (error) {
      console.error("error");
    });
};

export default desactivarEmpleado;
