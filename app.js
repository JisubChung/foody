var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

// Set server port and run it
app.get('/', function(req, res) {
	res.sendfile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
	console.log('server is running on http://localhost:' + app.get('port'));
});