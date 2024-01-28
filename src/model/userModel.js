import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Principle",'Registrar','Dean','Finance','HOD','Lecturer','Student']
    },
    timeStamps:true
})

const User = mongoose.model('User', userSchema)
export default User 