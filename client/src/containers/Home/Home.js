import React, { Component } from 'react';
import HeroLanding from '../../components/UI/Hero/HeroLanding/HeroLanding';
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar';
import Feed from '../../components/Feed/Feed';
import Alert from '../../components/UI/Alert';
import { withRouter } from 'react-router-dom';
class Home extends Component {
  render() {
    const { isVerified } = this.props;
    return (
      <>
        {
          this.props.token ?
            <>
              <Navbar />
              <div className="container">
                {
                  isVerified ? null
                    :
                    <Alert status="primary" size="4">
                      Please Verify your email
                    </Alert>
                }
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
    isVerified: state.auth.isVerified
  }
}

export default withRouter(connect(mapStateToProps)(Home));