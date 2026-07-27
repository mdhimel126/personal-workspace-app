import mongoose from "mongoose";

const uploadSchema=new mongoose.Schema(
    {
        originalName:{
            type:String,
            required:true
        },
        fileName:{
            type:String,
            required:true
        },
        fileUrl:{
            type:String,
            required:true
        },
        fileType:{
            type:String,
            required:true
        },
        fileSize:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
);

const Upload=mongoose.model("Upload",uploadSchema);

export default Upload;