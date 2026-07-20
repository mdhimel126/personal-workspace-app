import Routine from "../models/routine.js";

const createRoutine =async (req,res)=>{

    try{
        const routine= await Routine.create(req.body);

        res.status(200).json({
            success:true,
            message:"Successfull",
            data:routine
        });
        }catch(error){
            res.status(404).json({
                success:false,
                message:error.message

            })
        }
}

export default createRoutine;