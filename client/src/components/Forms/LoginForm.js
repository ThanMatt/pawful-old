import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-user';
import Alert from '../UI/Alert';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    dialog: ''
  }

  changeHandler = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    axios.post('/login', {
      email,
      password
    }).then((response) => {
      this.setState({
        dialog: response.data.message
      })
    }).catch((err) => console.log(err))

    setTimeout(() => {
      this.setState({
        dialog: ''
      })
    }, 3000)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {
          this.state.dialog ?
            <Alert status="danger">
              {this.state.dialog}
            </Alert>
            : null
        }
        <div className="field">
          <label className="label has-text-black has-text-weight-bold">Username or Email Address</label>
          <div className="control">
            <input
              type="text"
              className="input is-rounded"
              onChange={this.changeHandler}
              name="email"
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-black has-text-weight-bold">Password</label>
          <div className="control">
            <input
              type="password"
              className="input is-rounded"
              onChange={this.changeHandler}
              name="password"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">

            <div className="level is-mobile">

              <div className="level-left">
                <div className="level-item">
                  <label className="checkbox has-text-black">
                    <input type="checkbox" />
                    Remember Me
                          </label>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <div className="buttons is-right">
                    <Link className="button is-text is-right is-size-7">Forgot password?</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="field">
          <button className="button has-text-black has-text-weight-bold is-fullwidth is-medium is-info is-rounded">Log In</button>
        </div>

      </form>
    )
  }
}

export default LoginForm;