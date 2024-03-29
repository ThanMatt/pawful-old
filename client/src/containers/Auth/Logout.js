import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Logout extends Component {
  componentDidMount() {
    this.props.onAuthLogout()
  }
  render() {
    return <Redirect to="/login" />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthLogout: () => dispatch(actions.authLogout())
  }
}
export default connect(null, mapDispatchToProps)(Logout);