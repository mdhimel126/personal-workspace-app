import mongoose from "mongoose";

const RoutineSchema= new mongoose.Schema(
    {
        morning:{
            type:Number
        },
        afternoon:{
            type:Number
        },
        night:{
            type:Number

        },
        total:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

const Routine=mongoose.model("Routine",RoutineSchema);

export default Routine;