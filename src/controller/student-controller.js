const express = require("express");
const student = require("../database/studentDB");
const route = express.Router();

route.get('/student', (req,res)=>{
    res.json(student);
})

route.get('/student/:name', (req,res)=>{
    const found = student.some(student => student.name === req.params.name);
    if (found){
        res.json(student.filter(student => student.name === req.params.name))
    }
    else {
        res.json( { msg : `no student with that name`})
    }
})

module.exports = route;