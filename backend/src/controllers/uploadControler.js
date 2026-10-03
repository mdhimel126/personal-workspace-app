
import Upload from "../models/upload.js";

export const uploadFile=async(req,res,next)=>{

    try{

        const{text}=req.body;

        if(!req.file && !text){
            return res.status(404).json({
                success:false,
                message:"Please provide either a file or text content"
            });
        }

        let category="both";
        if(req.file && !text){
            category="file";
        }

        if(!req.file && text){
            category="text";
        }
    
        const uploadedFile= await Upload.create({
            originalName:req.file ?.originalname || null,
            fileName:req.file ?.filename || null,
            fileUrl:req.file ?.path || null,
            fileType:req.file ?.mimetype || null,
            fileSize:req.file ?.size || null,
            text:text || null,
            category:category
        });

    res.status(200).json({
        success:true,
        message:category ==="text"? "text Saved successfully" : "file Upload successfully ",
        data:uploadedFile
    });

    }catch(error){

        next(error);
    }

};

export const getTextUploads=async(req,res)=>{
    try{

        const textData= await Upload.find(
            {text:{ $ne: null}},"text category createdAt"
        ).sort({createdAt:-1});

        return res.status(200).json({
            success:true,
            count:textData.length,
            data:textData
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"sorry facing some problem to fetch data",
            error:error.message
        });

    }
};

