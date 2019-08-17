import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm';

class Login extends Component {
  render() {
    const subtitleStyle = {
      marginTop: '5%'
    }
    return (
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-3">
              <h1 className="title is-1 has-text-black has-text-centered" id="title-card">
                Pawful
              </h1>
              <LoginForm />
              <div className="field" style={subtitleStyle}>
                <label className="has-text-black">New to Pawful? <Link to="/register" className="has-text-link has-text-weight-bold">
                  Join Now</Link></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;