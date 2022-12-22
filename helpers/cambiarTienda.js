import axios from "axios";

const cambioTienda = (idEmpleado, tienda) => {
  let datos = {
    Source: "PetcoIntegration",

    Data: {
      Request: {
        Settings: {
          IsPasswordHashed: false,

          LocationSetting: "Code",
        },

        Employees: [
          {
            loginName: idEmpleado,

            Locations: [tienda],
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
      datos,
      config
    )

    .then((response) => {
      response.data;
    })
    .catch(function (error) {
      console.error("error");
    });

  console.log(datos.Data.Request.Employees);
};

export default cambioTienda;
