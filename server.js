// packages
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
// port can be overwritten here
let port = process.env.PORT || 8888;

// API routes
let projectRoutes = require('./app/routes/routes.js');

app.use('/api', projectRoutes);

app.listen(port);
console.log('Server started, listening on port: ' + port);
