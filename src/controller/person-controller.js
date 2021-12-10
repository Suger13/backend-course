const express = require('express');
const route = express.Router();
const person = require('../database/personDB');

//get all person
route.get('/person', (req,res)=>{
    res.json(person);
})

//get single person
route.get('/person/:id', (req,res)=>{
    found = person.some(person => person.id === parseInt(req.params.id));
    if (found){
        res.json(person.filter(person => person.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({
            msg : `no person with id of ${req.params.id}`
        })
    }
})


module.exports = route;