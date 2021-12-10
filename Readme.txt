Conect with mongoDB

- install mongoose >> npm i mongoose --save
- require('mongoose') in application
- **Create Schema
  :create new jsfile
  :reqruire('mongoose')
  :use mongoose.schema()
  :use mongoose.model()
	**schema = mongoose.schema(), 
	  model = mongoose.model()
	***also use { schema, model } = require('mongoose');
- const schemaName = schema({ schema })
- create model to contain schema
  :const modelName = model('CollectionName', schemaName);

- export Model 
  :module.exports = modelName;

- create service?