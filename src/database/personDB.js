const { v4: uuidv4 } = require('uuid');


const person = [
    {
        name : "Yolvick",
        age : 31,
    },{
        
        name : "Jamies",
        age : 48,
    },{
        name : "Hellen",
        age : 29,
    }
]

for (i = 0; i<person.length; i++){
    person[i].id = uuidv4();
}


module.exports = person;