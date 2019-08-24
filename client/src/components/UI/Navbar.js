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
    const { username } = this.props;
    return (
      <>
        <Helmet>
          <body className="has-navbar-fixed-top" />
        </Helmet>
        <nav className="navbar is-info is-fixed-top">
          <div className="navbar-brand">
            <label className="title is-5 has-text-black navbar-item">Pawful</label>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-item">
                  {username}
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/logout" className="navbar-item">
                    Log Out
                </Link>
                </div>
              </div>
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
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProfile: (token) => dispatch(actions.fetchProfile(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);