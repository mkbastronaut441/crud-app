const Student=require("../models/crudModel");



//Create 

exports.createStudent=async(req,res,next)=>{
    const student=await Student.create(req.body);
    res.status(201).json({
        success:true,
        message: " Entry created successfully",
        student
    })
}

//Read(Get all students)
exports.getAllStudents=async(req,res)=>{
    const students=await Student.find(req.query);
    res.status(201).json({
        success:true,
        message: " All Entries  fetched successfully",
        students
    })
}

//Update
exports.updateStudent=async(req,res,next)=>{
    let student=await Student.findById(req.params.id);
    student=await Student.findByIdAndUpdate(req.params.id,req.body);
    await student.save()
    res.status(201).json({
        success:true,
        message: "Entry is updated successfully",
        student
    })

}

//Delete
exports.deleteStudent=async(req,res,next)=>{
    const student=await Student.findById(req.params.id);
    await student.remove()
    res.status(201).json({
        success:true,
        message: "Entry is deleted successfully",
        student
    })

}