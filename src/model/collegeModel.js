import mongoose from "mongoose";
const collegeSchema = mongoose.Schema({

    campus_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Campus"
    
       },
    collegeName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },

    timeStamps:true
})

const College = mongoose.model("College",collegeSchema)
export default College