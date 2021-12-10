const express = require('express');
const route = express.Router();
const URLlog = require("../middleware/URLlog");
const product = require('../database/productDB');

route.use(URLlog)

//get all product
route.get('/product', (req,res)=>{
    res.json(product);
})

route.get('/product/:name' ,(req,res)=>{
    let found = product.some(product => product.name === req.params.name)
    
    if (found){
        res.json(product.filter(product => product.name === req.params.name));
    }
    else {
        res.json(
            { msg : `Not found vacine ${req.params.name}`}
        )
    }
})

module.exports = route;