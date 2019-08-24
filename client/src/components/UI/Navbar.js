import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../store/actions/index';

class Navbar extends Component {
  componentDidMount() {
    this.props.onFetchProfile(this.props.token);
  }
  render() {
    const { username, animal } = this.props;
    const brandMargin = {
      marginLeft: '100%'
    }

    const menuMargin = {
      marginRight: '85px'
    }
    return (
      <>
        <Helmet>
          <body className="has-navbar-fixed-top" />
        </Helmet>
        <nav className="navbar is-info is-fixed-top">
          <div className="navbar-brand">
            <label className="title is-5 has-text-black navbar-item" style={brandMargin}>Pawful</label>

          </div>
          <div className="navbar-menu" style={menuMargin}>
            <div className="navbar-end">

              <Link className="navbar-item has-text-black">
                Home
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-item has-text-black">
                  {username}
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/logout" className="navbar-item">
                    Log Out
                </Link>
                </div>
              </div>

              <Link className="navbar-item">
                <span className="icon has-text-black">
                  <i className="fas fa-paw"></i>
                </span>
              </Link>

              <Link className="navbar-item">
                <span className="icon has-text-black">
                  <i className={'fas fa-' + animal.toLowerCase()}></i>
                </span>
              </Link>

              <Link className="navbar-item">
                <span className="icon has-text-black">
                  <i className="fas fa-bell"></i>
                </span>
              </Link>

            </div>
          </div>
        </nav>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    animal: state.user.animal,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProfile: (token) => dispatch(actions.fetchProfile(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);