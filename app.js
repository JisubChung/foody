var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var	assert = require('assert');


// MONGO STUFF
// Connection Url, TODO: set this programatically
var url = 'mongodb://localhost:27017/foody';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Mongo Connected");

	// NOTE: from what I understand, we don't need to close this here
	db.close();
});

app.set('port', (process.env.PORT || 5000));

// TODO: there's a prettier way to do this, figure it out.
//// (The goal with this section is to change file paths in the case of production vs develop)
//// If there is a dist, use it
// fs.access(path.join(__dirname,'dist'),'r', function(err) {
// 	var serve = !err ? 'dist':'public';
// 	app.use(express.static(path.join(__dirname, serve)));
// 	app.get('/', function(req, res) {
// 		res.sendfile('./' + serve + '/index.html');
// 	});
// });

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', function(req, res) {
	res.sendfile('./public/pages/index.html');
});

app.get('/about', function(req,res) {
	res.sendfile('./public/pages/about.html');
});

app.use('/', router);

app.listen(app.get('port'), function() {
	console.log('server is running on http://localhost:' + app.get('port'));
});