import mongoose from "mongoose";
const CampusSchema = mongoose.Schema({

    collegeId:{

    },
    campusName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        province: String,
        district: String,
        sector: String,
        cell: String,
        village: String,
    },
    image:{
        type:String,
        required:false

    },
    timeStamps:true
})

const Campus = mongoose.model("Campus",CampusSchema)
export default Campus