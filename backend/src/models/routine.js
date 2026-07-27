import mongoose from "mongoose";

const RoutineSchema= new mongoose.Schema(
    {
        date:{
            type:String
        },
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