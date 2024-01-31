import express from 'express'
import studentController from '../controller/studentController.js'

const studentRouter = express.Router()

studentRouter.post('/student',studentController.createStudent)


export default studentRouter;