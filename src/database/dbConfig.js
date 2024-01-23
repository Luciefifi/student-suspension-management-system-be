import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const connection = async()=>{
    try{
        await mongoose.connect(DATABASE_URL,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
        });
    console.log("database connected!!!!")
    }
    catch(error){
        console.log(error.message)
    }

}



export default connection