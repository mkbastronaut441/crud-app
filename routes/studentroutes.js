const express=require('express');

const{createStudent, getAllStudents, updateStudent, deleteStudent}=require("../controllers/StudentController");


router=express.Router();

router.route("/students").get(getAllStudents);

router.route("/student/new").post(createStudent);

router.route("/student/:id").put(updateStudent).delete(deleteStudent);





module.exports=router