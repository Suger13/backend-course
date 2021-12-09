// const mongoose = require('mongoose');
// const schema = mongoose.schema;
const { Schema, model } = require('mongoose'); //same result
const StatusEnum = require('../common/status-enum')

//create schema
const personSchema = new Schema({
    name : { 
        type : String, 
        require : true 
    },
    age : Number,
     
    status : {
        type : String,
        default : StatusEnum.ACTIVE
    },
     
    timestamps : true, strict : true 
    
})

const personModel = model('person', personSchema)

module.exports = personModel;