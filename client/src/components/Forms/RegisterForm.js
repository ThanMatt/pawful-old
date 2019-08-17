import React, { Component } from 'react';
import axios from '../../axios-user';

class RegisterForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
    animal: 'cat',
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      month,
      day,
      year,
      animal
    } = this.state

    const birthday = month + '/' + day + '/' + year;

    axios.post('/register', {
      username,
      email,
      password,
      animal,
      birthday
    }).then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  changeHandler = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const fieldStyle = {
      marginBottom: '2%',
      marginRight: '2%'
    }

    return (
      <form onSubmit={this.submitHandler}>
        <div className="field">
          <label className="label has-text-black has-text-weight-bold">Username</label>
          <div className="control">
            <input
              type="text"
              className="input is-rounded"
              onChange={this.changeHandler}
              name="username"
              style={fieldStyle}
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-black has-text-weight-bold">Email Address</label>
          <div className="control">
            <input
              type="text"
              className="input is-rounded"
              onChange={this.changeHandler}
              name="email"
              style={fieldStyle}
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
              style={fieldStyle}
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-black has-text-weight-bold">Birthday</label>
          <div className="field is-grouped">
            <div className="field" style={fieldStyle}>
              <label htmlFor="" className="label has-text-black has-text-weight-normal is-size-7">Month</label>
              <div className="control">
                <input
                  type="number"
                  className="input is-rounded"
                  min="1"
                  max="12"
                  onChange={this.changeHandler}
                  name="month"
                />
              </div>

            </div>
            <div className="field" style={fieldStyle}>
              <label htmlFor="" className="label has-text-black has-text-weight-normal is-size-7">Day</label>
              <div className="control">
                <input
                  type="number"
                  className="input is-rounded"
                  min="1"
                  max="31"
                  onChange={this.changeHandler}
                  name="day"
                />
              </div>

            </div>
            <div className="field" style={fieldStyle}>
              <label htmlFor="" className="label has-text-black has-text-weight-normal is-size-7">Year</label>
              <div className="control">
                <input
                  type="number"
                  className="input is-rounded"
                  min="1900"
                  max="2019"
                  onChange={this.changeHandler}
                  name="year"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="field">
          <button className="button has-text-black has-text-weight-bold is-fullwidth is-medium is-info is-rounded">Register</button>
        </div>
      </form>

    )
  }
}

export default RegisterForm;