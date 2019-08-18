import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm';
import {connect} from 'react-redux';
class Login extends Component {

  componentDidUpdate() {
    const {token} = this.props;
    if (token) {
      this.props.history.push('/');
    }
  }
  render() {
    const subtitleStyle = {
      marginTop: '5%'
    }

    const titleStyle = {
      marginBottom: '7%'
    }
    return (
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-3">
              <h1 className="title is-1 has-text-black has-text-centered" id="title-card" style={titleStyle}>
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Login);