import "dotenv/config";
import app from "./app.js";

import {connectionDB} from "./config/db.js";

const PORT=process.env.PORT || 5000;

console.log(process.env.MONGODB_URL);

connectionDB();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} port`);
});

