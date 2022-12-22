import express from "express";
import router from "./routes/router.js";

const app = express();
app.use(express.json());

app.use("/api/empleados", router);

app.listen(4000, () => {
  console.log("servidor funcionando en el puerto 4000");
});
