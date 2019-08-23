import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './NewPost/NewPost';
import VerifyEmail from './VerifyEmail/verifyEmail'

class Feed extends Component {

  componentDidMount() {
    const { onFetchPosts, onUserVerify, token } = this.props;

    onFetchPosts(token);
    onUserVerify(token)

  }
  render() {
    const { username, isVerified } = this.props;
    const container = {
      width: '80%',
      margin: 'auto'
    }
    return (
      <div style={container}>
        <div className="columns">
          <div className="column">
            <ProfileInfo username={username} />
          </div>
          <div className="column is-6">
            <NewPost />
          </div>
          <div className="column">
            {
              isVerified ? null : <VerifyEmail />
            }
            <ProfileInfo username={username} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    username: state.user.username,
    isVerified: state.user.isVerified,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: (token) => dispatch(actions.fetchPosts(token)),
    onUserVerify: (token) => dispatch(actions.fetchUserVerify(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);