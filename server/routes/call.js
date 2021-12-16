import express from "express";

import { createCall, getCalls } from "../controllers/call.js";

const router = express.Router();
router.get("/", getCalls);
router.post("/", createCall);

export default router;
