import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
