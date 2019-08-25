import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import ProfileInfo from './ProfileInfo/profileInfo';
import NewPost from './NewPost/NewPost';
import VerifyEmail from './VerifyEmail/verifyEmail'
import ContentPost from './ContentPost/contentPost';

class Feed extends Component {

  componentDidMount() {
    const { onFetchPosts, token, onUserVerify } = this.props;

    onFetchPosts(token);
    onUserVerify(token)
  }

  render() {
    const { username, token, posts, loading, animal, userLoading, icon, isVerified } = this.props;
    const container = {
      width: '90%',
      margin: 'auto'
    }
    return (
      <div style={container}>
        {
          userLoading ? <p className="is-size-1 loader"></p>
            :
            <div className="columns">
              <div className="column" id="profile-container">
                <ProfileInfo
                  username={username}
                  animal={animal}
                  icon={icon}
                />
              </div>
              <div className="column is-6">
                <NewPost token={token} animal={animal} icon={icon} />
                {
                  loading ? 'wait lang'
                    :
                    posts.map((post, index) => {
                      return (
                        <ContentPost
                          data={post}
                          key={index}
                        />
                      )

                    })
                }
              </div>
              <div className="column" id="stuff-container">
                {
                  isVerified ? null : <VerifyEmail hide={this.closeDialog} />
                }
                <ProfileInfo username={username} />
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
    userLoading: state.user.loading,
    icon: state.user.icon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: (token) => dispatch(actions.fetchPosts(token)),
    onUserVerify: (token) => dispatch(actions.fetchUserVerify(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);