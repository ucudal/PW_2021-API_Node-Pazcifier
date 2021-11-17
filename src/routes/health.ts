import express from "express";

import * as health from "../controllers/health";

const router = express.Router();

router.get("/healthz", health.checkHealth);

export default router;