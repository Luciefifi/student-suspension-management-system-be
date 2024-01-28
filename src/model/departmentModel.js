import mongoose from "mongoose";
const departmentSchema = mongoose.Schema({

    school_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"School"
    
       },
   departmentName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
 
    timeStamps:true
})

const Department = mongoose.model("Department",departmentSchema)
export default Department