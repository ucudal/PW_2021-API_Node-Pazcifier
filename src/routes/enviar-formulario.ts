import express from "express";

import * as formulario from "../controllers/enviar-formulario";

const router = express.Router();

router.post("/enviar-formulario", formulario.enviarFormulario);

export default router;