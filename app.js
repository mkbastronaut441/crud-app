const express = require('express');
const connectDB=require('./models/database');
const student=require("./routes/studentroutes");

const app=express();
app.use(express.json())


//DB connection
connectDB();


//import routes
app.use("/api/v1",student);





//server configurations
app.listen(4000,()=>{
    console.log(`server is listening at http://localhost:4000`);
})