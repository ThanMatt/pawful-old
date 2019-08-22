import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import ProfileInfo from '../Feed/ProfileInfo/ProfileInfo';
import NewPost from '../Feed/NewPost/NewPost';

class Feed extends Component {

  componentDidMount() {
    const { onFetchPosts, token } = this.props;

    onFetchPosts(token);
  }
  render() {
    const { username } = this.props;
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
            <ProfileInfo />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: (token) => dispatch(actions.fetchPosts(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);