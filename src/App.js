import React, { Component } from 'react';
import NavLink from './modules/NavLink';
import logo from './img/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Very Web Site!</h2>
          <ul className="nav-bar">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Profile">Profile</NavLink></li>
          </ul>
        </div>
        <div className="App-intro">
          <p>You're currently on page:</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
