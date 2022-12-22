import express from "express";
import { pintar, registrar } from "../controllers/EmpleadoController.js";

const router = express.Router();

router.post("/", registrar);
router.get("/", pintar);

export default router;
