const mongoose=require('mongoose');


const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/Crud-app');


    const db=mongoose.connection

    db.on('error',()=>{
        console.log('Error in connecting to db');
    })

    db.once('open',()=>{
        console.log('Connected to db');
    })
}


module.exports=connectDB