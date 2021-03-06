//app.js เป็น Entry file ที่เอาไว้ใช้ run คำสั่ง node app.js หรือ nodemon app.js เพื่อสั่งรันเซิฟเวอร์
//โดยทั้ง route หรือ middle ware ต่างๆ จำเป็นต้องนำมา import ใน entry file เพื่อใช้รันคำสั่งทั้งหมด


require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const person = require('./src/controller/person-controller');
const product = require('./src/controller/product-controller');
const URLlog = require('./src/middleware/URLlog');
const student = require('./src/controller/student-controller');
const aun = require("./src/controller/aun-controller");


// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser:true })


app.use(urlencoded({extended : false}))
//middleware
app.use(URLlog);

//homepage route
app.get('/',(req,res)=>{
    res.send('HelloWorld')
})

app.use(person);
app.use(product)
app.use(student);
app.use(aun);

app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT}`)
})