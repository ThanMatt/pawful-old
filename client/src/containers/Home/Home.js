import React, { Component } from 'react';
import HeroLanding from '../../components/UI/Hero/HeroLanding/HeroLanding';
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({
      isActive: false
    })
  }

  toggleDropdown = () => {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive
    })
  }
  render() {
    const { token, username, isVerified, animal } = this.props;
    return (
      <>
        {
          token ?
            <>
              <Navbar
                isActive={this.state.isActive}
                click={this.handleClick}
                toggle={this.toggleDropdown}
              />
              <div className="container" onClick={this.handleClick}>
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