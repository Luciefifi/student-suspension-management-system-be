import express from 'express';
import dotenv from "dotenv"
import connection from './src/database/dbConfig.js';
import studentRouter from './src/router/studentRouter.js';
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT ||3000
connection();
app.listen(PORT,()=>{
    console.log(`The server is running on : ${PORT}`)

})

app.use('/api',studentRouter)

