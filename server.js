import express from 'express';
import dotenv from "dotenv"
import connection from './src/database/dbConfig.js';
dotenv.config()

const app = express()
const PORT = process.env.PORT ||3000
connection();
app.listen(PORT,()=>{
    console.log(`The server is running on : ${PORT}`)

})