import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/profile" component={Profile}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
