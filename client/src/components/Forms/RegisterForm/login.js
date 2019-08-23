import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
  const subtitleStyle = {
    marginTop: '5%'
  }
  return (
    <div className="field">
      <label htmlFor="" className="label has-text-black has-text-weight-normal has-text-centered" style={subtitleStyle}>Have an account?</label>
      <div className="control">
        <Link to="/login" className="button is-white is-inverted is-outlined is-rounded is-fullwidth is-medium">Log In</Link>
      </div>
    </div>

  )
}

export default login;