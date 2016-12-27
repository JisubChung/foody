var React = require('react');
var ReactDOM = require('react-dom');

console.log('test');

// JSX
React.render(React.createElement(
	'h1',
	null,
	'Hello, world!'
), document.getElementById('example'));

// Native JavaScript
React.render(React.createElement('h1', null, 'Hello, world!'), document.getElementById('example'));