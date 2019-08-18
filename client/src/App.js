import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

import './assets/sass/bulma-styles.scss';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </div>
    );
  }
}

export default App;
