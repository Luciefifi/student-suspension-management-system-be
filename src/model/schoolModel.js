import mongoose from "mongoose";
const schoolSchema = mongoose.Schema({

    college_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"College"
    
       },
   schoolName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
 
    timeStamps:true
})

const School = mongoose.model("School",schoolSchema)
export default School