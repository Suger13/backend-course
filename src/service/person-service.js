const PersonDocument = require("../models/person-schema");

const PersonService = {
    create (payload) {
        return new PersonDocument(payload).save()
    }
}

module.exports = PersonService;