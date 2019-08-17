import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/Forms/RegisterForm';

class Register extends Component {
  render() {
    const titleStyle = {
      marginBottom: '12%',
    }
    const subtitleStyle = {
      marginTop: '5%'
    }
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-4">
              <h1 className="title is-3 has-text-black has-text-centered" id="title-card" style={titleStyle}>
                Greetings, Hooman
              </h1>
              <RegisterForm />
              <div className="field">
                <label htmlFor="" className="label has-text-black has-text-weight-normal has-text-centered" style={subtitleStyle}>Have an account?</label>
                <div className="control">
                  <Link to="/login" className="button is-white is-inverted is-outlined is-rounded is-fullwidth is-medium">Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Register;