import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Logout from './containers/Auth/Logout';

import './assets/sass/bulma-styles.scss';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />
      </div>
    );
  }
}

export default App;
