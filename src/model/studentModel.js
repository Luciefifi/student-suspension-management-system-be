import mongoose from "mongoose";
const studentSchema =  mongoose.Schema({
    regNumber:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true  
    },
    lastName:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    address: {
        province: String,
        district: String,
        sector: String,
        cell: String,
        village: String,
      },
      telephone:{
        type:String,
        required:true
      },
      sponsor:{
        type:String,
        required:true
      },
      campus:{
        type:String,
        required:true

      },
      college:{
        type:String,
        required:true

      },
      school:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    faculty:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
})
const Student = mongoose.model('Student', studentSchema)
export default Student 