var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
// var router = express.Router();

app.set('port', (process.env.PORT || 5000));

// If there is a dist, use it
fs.access(path.join(__dirname,'dist'),'r', function(err) {
	var serve = !err ? 'dist':'public';
	app.use(express.static(path.join(__dirname, serve)));
	app.get('/', function(req, res) {
		res.sendfile('./' + serve + '/index.html');
	});
});

app.listen(app.get('port'), function() {
	console.log('server is running on http://localhost:' + app.get('port'));
});