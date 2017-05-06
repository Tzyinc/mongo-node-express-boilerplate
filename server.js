//packages
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose	= require('mongoose');

mongoose.connect('localhost:27017', (error) => {
	if (error) {
		console.error('make sure mongodb is installed and running!');
		throw error;
	}
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//API routes
var project_routes = require('./app/routes/routes.js');

app.use('/api',project_routes);

app.listen(port);
console.log('Server started, listening on port: ' + port);

