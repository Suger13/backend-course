const express = require('express');
const route = express.Router();

route.get('/', (req,res,next)=>{
    console.log(`${req.protocol}://${req.hostname}${req.originalUrl}`)
    next();
})

module.exports = route;