import React, { Component } from 'react';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import { connect } from 'react-redux';

class Register extends Component {
  componentDidUpdate() {
    const { token } = this.props;

    if (token) {
      this.props.history.push('/');
    }
  }
  render() {
    const titleStyle = {
      marginBottom: '12%',
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

export default connect(mapStateToProps)(Register);