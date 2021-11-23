import express from "express";

import * as experiencia from "../controllers/experiencia-laboral";

const router = express.Router();

router.get("/experiencia-laboral", experiencia.experienciaLaboral);

export default router;