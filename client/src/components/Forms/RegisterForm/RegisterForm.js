import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Login from './login';
import Input from '../../UI/input';

class RegisterForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
    animal: 'Dog',
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

    const { onAuth } = this.props;

    const birthday = month + '/' + day + '/' + year;
    const userData = {
      username,
      email,
      password,
      birthday,
      animal
    }

    onAuth(userData, true);
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

    const options = ['Dog', 'Cat'];

    return (
      <>
        <form onSubmit={this.submitHandler}>

          <Input
            className="input is-rounded"
            label="Username"
            name="username"
            onChange={this.changeHandler}
            value={this.state.username}
            config={{ type: 'text', style: fieldStyle }}
          />

          <Input
            className="input is-rounded"
            label="Email Address"
            name="email"
            onChange={this.changeHandler}
            value={this.state.email}
            config={{ type: 'email', style: fieldStyle }}
          />

          <Input
            className="input is-rounded"
            label="Password"
            name="password"
            onChange={this.changeHandler}
            value={this.state.password}
            config={{ type: 'password', style: fieldStyle }}
          />

          <div className="field">
            <label className="label has-text-black has-text-weight-bold">Birthday</label>
            <div className="field is-grouped">

              <Input
                className="input is-rounded"
                labelClassName="has-text-weight-normal is-size-7"
                label="Month"
                onChange={this.changeHandler}
                name="month"
                value={this.state.month}
                divConfig={{ style: fieldStyle }}
                config={{
                  type: 'number',
                  min: '1',
                  max: '12',
                }}
              />

              <Input
                className="input is-rounded"
                labelClassName="has-text-weight-normal is-size-7"
                label="Day"
                onChange={this.changeHandler}
                name="day"
                value={this.state.day}
                divConfig={{ style: fieldStyle }}
                config={{
                  type: 'number',
                  min: '1',
                  max: '31',
                }}
              />

              <Input
                className="input is-rounded"
                labelClassName="has-text-weight-normal is-size-7"
                label="Year"
                onChange={this.changeHandler}
                name="year"
                value={this.state.year}
                divConfig={{ style: fieldStyle }}
                config={{
                  type: 'number',
                  min: '1900',
                  max: '2019',
                }}
              />

            </div>

            <Input
              className="select is-rounded"
              label="Animal"
              onChange={this.changeHandler}
              type="select"
              name="animal"
              value={this.state.animal}
              options={options}
            />

          </div>
          <div className="field">
            <button className="button has-text-black has-text-weight-bold is-fullwidth is-medium is-info is-rounded">Register</button>
          </div>
        </form>
        <Login />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData, isSignUp) => dispatch(actions.auth(userData, isSignUp))
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm);