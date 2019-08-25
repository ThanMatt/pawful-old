import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Logout from './containers/Auth/Logout';
import * as actions from './store/actions/index';

import './assets/sass/bulma-styles.scss';
import './assets/css/styles.css';
import '@fortawesome/fontawesome-free/css/all.css'

class App extends Component {
  componentDidMount() {
    this.props.onTryAuth();
  }
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAuth: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
