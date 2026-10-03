import express from "express";

import upload from "../middleware/uploadMiddleware.js"

import {uploadFile,getTextUploads} from "../controllers/uploadControler.js";




const router=express.Router();

router.post("/",upload.single("file"),uploadFile);
router.get("/texts",getTextUploads);

export default router;
