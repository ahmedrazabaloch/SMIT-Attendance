import { v2 as cloudinary } from 'cloudinary';

const cloud_name = process.env.CLOUD_NAME ;
const api_key = process.env.API_KEY ;
const api_secret = process.env.API_SECRET ;

    // Configuration
    cloudinary.config({ 
        cloud_name, 
        api_key, 
        api_secret // Click 'View Credentials' below to copy your API secret
    });
    
    
export { cloudinary }