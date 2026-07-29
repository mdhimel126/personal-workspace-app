
import Upload from "../models/upload.js";

const uploadFile=async(req,res,next)=>{

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

export default uploadFile;