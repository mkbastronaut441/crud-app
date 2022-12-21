const {Timestamp}=require('mongodb');
const mongoose=require('mongoose');



const StudentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the student's name"],
        uppercase:true,
        trim:true,
        minLength:6,
        maxLength:20
        
    },

    rollNo:{
        type:Number,
        required:[true,"please enter the student's roll number"],
        validate(value){
            if(value<0){
                throw new Error("rollNo cannot hold a negative value");
            }
        }
        
    },

    class:{
        type: String,
        required:[true,"please enter the student's class"]
    },

    fatherName:{
        type: String,
        required:[true,"please enter the student's father's name"]
    },

    Address:{
        type:String,
        required:[true,"please enter the student's address"]
    }
})


module.exports=mongoose.model("Student",StudentSchema);