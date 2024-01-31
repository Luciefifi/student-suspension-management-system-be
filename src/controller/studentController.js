import Student from "../model/studentModel.js";
class studentController{
    static async createStudent(req, res) {
        try {
          
          const student = new Student({
            regNumber: req.body.regNumber,
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            Gender:req.body.Gender,
            dateOfBirth:req.body.dateOfBirth,
            address: {
                province: req.body.province,
                district: req.body.district,
                sector: req.body.sector,
                cell: req.body.cell,
                village: req.body.village,
            },
            telephone:req.body.telephone,
            campus:req.body.campus,
            college:req.body.college,
            sponsor:req.body.sponsor,
            school:req.body.school,
            department:req.body.department,
            faculty:req.body.faculty,
         
          });
         
          await student.save();
          console.log(student.address)
          res.status(201).json({
            status: "success",
            message: "student created successfully",
            data: student,
          });
        } catch (error) {
          res.status(500).json({
            status: "fail",
            error: error
          });
          console.log(error);
        }
      }
    }


    export default studentController