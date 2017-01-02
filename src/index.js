import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/discover" component={Discover}/>
			<Route path="/profile" component={Profile}/>
			<Route path="/setting" component={Setting}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
