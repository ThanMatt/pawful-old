import React, { Component } from 'react';
import HeroLanding from '../../components/UI/Hero/HeroLanding/HeroLanding';
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar';
import Feed from '../../components/Feed/Feed';
import { withRouter } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <>
        {
          this.props.token ?
            <>
              <Navbar />
              <Feed />
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
    username: state.auth.username
  }
}

export default withRouter(connect(mapStateToProps)(Home));