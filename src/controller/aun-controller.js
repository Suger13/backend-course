//ไฟล์controller เปรียบเหมือนการตั้งค่าฟังชั่นนึงเพื่อให้ทำงานตามคำสั่งในตอนรันที่ entry file เช่นในตัวอย่างนี้ จากบรรทัด 3 เป็นการ Import ข้อมูลจาก aunDB จาก database/aunDB.js อีกทีนึง โดยมาเก็บไว้ในตัวแปร aunDB
//บรรทัดที่ 4 เป็นการประกศใช้ module express
//route เป็นการประกาศใช้ method Router จาก express module

//เป็นการเรียกใช้ข้อมูลจาก ./database/aunDB.js
const aunDB = require("../database/aunDB");
const express = require("express");
const route  = express.Router();

route.get('/aun', (req,res)=>{
    res.json(aunDB)
})


module.exports = route;