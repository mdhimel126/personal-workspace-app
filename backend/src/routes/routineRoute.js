import express from "express";

import createRoutine  from "../controllers/routineControler.js";

const router=express.Router();

router.post("/",createRoutine);

export default router;

