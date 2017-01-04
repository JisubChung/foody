import React, { Component } from 'react';
import NavLink from './modules/NavLink';
import logo from './img/burger.png';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      revealMenu: null
    }
  }

  handleClick(e) {
    console.log(e);
//    this.setState({revealMenu: e})
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo"/>
          <div className="title">Foody</div>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/Discover">Discover</NavLink></li>
            <li><NavLink to="/Setting">Setting</NavLink></li>
            <li><NavLink to="/Profile">Profile</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
