import express from "express";
import cors from "cors";
import routineRoute from "./routes/routineRoute.js";
import uploadRoute from "./routes/uploadRoutes.js";

const app=express();

app.use(cors());

app.use(express.json());

app.use("/api/routines",routineRoute);

app.use("/api/upload",uploadRoute);

export default app;