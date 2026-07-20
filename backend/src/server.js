import app from "./app.js";

import dotenv from "dotenv";

import {connectionDB} from "./config/db.js";

dotenv.config();

const PORT=process.env.PORT || 5000;

console.log(process.env.MONGODB_URL);

connectionDB();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} port`);
});

