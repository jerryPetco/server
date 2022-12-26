import express from "express";
import { pintar, registrar } from "../controllers/EmpleadoController.js";
import checkAuth from "../middlewares/tokenMiddleware.js";

const router = express.Router();

router.post("/", checkAuth, registrar);
router.get("/", pintar);

export default router;
