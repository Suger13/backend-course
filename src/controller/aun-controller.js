const aunDB = require("../database/aunDB");
const express = require("express");
const route  = express.Router();

route.get('/aun', (req,res)=>{
    res.json(aunDB)
})

module.exports = route;