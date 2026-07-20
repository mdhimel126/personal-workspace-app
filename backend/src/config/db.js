import mongoose from "mongoose";

export const connectionDB= async()=>{
    try{

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Your database is COnnected");

    }catch(error){
        console.log("Connection failed");
        console.log(error.message);

        process.exit(1);
    }
}