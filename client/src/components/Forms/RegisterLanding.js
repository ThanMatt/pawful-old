import React, { Component } from 'react';

class RegisterLanding extends Component {
  render() {
    return (

        <form>

          <div className="field">
            <label className="label has-text-black has-text-weight-light">Email Address</label>
            <div className="control">
              <input type="email" className="input is-rounded" />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-black has-text-weight-light">Password</label>
            <div className="control">
              <input type="password" className="input is-rounded" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-medium is-info is-rounded has-text-weight-bold has-text-black is-fullwidth">
                Register
              </button>
            </div>
          </div>

        </form>

    )
  }
}

export default RegisterLanding

