
import Upload from "../models/upload.js";

const uploadFile=async(req,res,next)=>{

    try{
    
        const uploadedFile= await Upload.create({
            originalName:req.file.originalname,
            fileName:req.file.filename,
            fileUrl:req.file.path,
            fileType:req.file.mimetype,
            fileSize:req.file.size
        });

    res.status(200).json({
        success:true,
        message:"File upload successfully",
        data:uploadedFile
    });

    }catch(error){

        next(error);
    }

};

export default uploadFile;