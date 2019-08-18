import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../UI/Alert';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    dialog: false
  }

  componentDidUpdate() {
    const { token } = this.props;

    if (token) {
      this.props.history.push('/');
    }
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
    const { onAuth } = this.props;
    onAuth(email, password)

  }

  render() {
    console.log(this.props);
    const { error, loading } = this.props;
    return (
      <form onSubmit={loading ? null : this.submitHandler}>
        {
          error ?
            <Alert status="danger">
              {error}
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
          <button className={'button has-text-black has-text-weight-bold is-fullwidth is-medium is-info is-rounded ' + (loading ? 'is-loading' : null)}>Log In</button>
        </div>

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    token: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);