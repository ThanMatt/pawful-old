import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'; 

import './assets/sass/bulma-styles.scss';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
