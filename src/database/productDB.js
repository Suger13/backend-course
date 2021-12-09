const { v4 : uuidv4 } = require('uuid');

const vacine = [
    {
        id : uuidv4(),
        name : "Sinovac",
        quality : "20",
    },
    {
        id : uuidv4(),
        name : "Sinofarm",
        quality : "50",
    },
    {
        id : uuidv4(),
        name : "Astrazeneca",
        quality : "60",
    },
    {
        id : uuidv4(),
        name : "Pfizer",
        quality : "90",
    },
    {
        id : uuidv4(),
        name : "Johnson & Johnson",
        quality : "85",
    }
]

module.exports = vacine;