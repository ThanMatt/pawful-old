import React, { Component } from 'react';
import HeroLanding from '../../components/UI/Hero/HeroLanding/HeroLanding';
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar';
import Feed from '../../components/Feed/Feed';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  render() {
    const { token, username, isVerified, animal } = this.props;
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
                  username={username}
                  animal={animal}
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
    username: state.user.username,
    animal: state.user.animal,
    isVerified: state.user.isVerified,
  }
}

export default withRouter(connect(mapStateToProps)(Home));