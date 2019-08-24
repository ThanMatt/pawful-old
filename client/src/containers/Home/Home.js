import React, { Component } from 'react';
import HeroLanding from '../../components/UI/Hero/HeroLanding/HeroLanding';
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar';
import Feed from '../../components/Feed/Feed';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Home extends Component {
  componentDidUpdate() {
    const { token, onUserVerify } = this.props;
    if (token) {
      onUserVerify(token);
    }
  }
  render() {
    const { token, username, isVerified } = this.props;
    return (
      <>
        {
          token ?
            <>
              <Navbar />
              <div className="container">
                <br />
                <Feed
                  token={token}
                  userrname={username}
                  isVerified={isVerified}
                />
              </div>

            </>
            : <HeroLanding />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    username: state.auth.username,
    isVerified: state.user.isVerified,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserVerify: (token) => dispatch(actions.fetchUserVerify(token))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));