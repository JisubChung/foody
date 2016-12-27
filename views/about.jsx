
console.log('test');

var React = require('react');
var ReactDOM = require('react-dom');


// JSX
React.render(
	<h1>Hello, about!</h1>,
	document.getElementById('example')
);

// Native JavaScript
React.render(
	React.createElement('h1', null, 'Hello, world!'),
	document.getElementById('example')
);