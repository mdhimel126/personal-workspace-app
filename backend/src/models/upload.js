import mongoose from "mongoose";

const uploadSchema=new mongoose.Schema(
    {
        originalName:{
            type:String,
            default:null
        },
        fileName:{
            type:String,
            default:null
        },
        fileUrl:{
            type:String,
            default:null
        },
        fileType:{
            type:String,
            default:null
        },
        fileSize:{
            type:Number,
            default:null
        },
        text:{
            type:String,
            default:null
        },
        category:{
            type:String,
            enum:["file","text","both"],
            default:"file"
        }
    },
    {
        timestamps:true
    }
);

const Upload=mongoose.model("Upload",uploadSchema);

export default Upload;