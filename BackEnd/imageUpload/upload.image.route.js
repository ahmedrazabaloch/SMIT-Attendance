import express from "express" 
import { uploadImage } from "./upload.image.js";
const imageUploadRouter = express.Router() ;

imageUploadRouter.post("/image/upload" , uploadImage)

export { imageUploadRouter }
