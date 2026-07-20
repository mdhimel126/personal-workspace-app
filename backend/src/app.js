import express from "express";
import cors from "cors";
import routineRoute from "./routes/routineRoute.js";

const app=express();

app.use(cors());

app.use(express.json());

app.use("/api/routines",routineRoute);

export default app;