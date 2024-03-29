import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../../store/actions/index';
import Search from './Search/search'
import NavItem from './NavItem/navItem';

class Navbar extends Component {
  componentDidMount() {
    this.props.onFetchProfile(this.props.token);
  }

  render() {
    const { username, animal, click } = this.props;
    const { isActive } = this.props;
    const brandMargin = {
      marginLeft: '8%'
    }

    const menuMargin = {
      marginRight: '10%'
    }
    return (
      <>
        <Helmet>
          <body className="has-navbar-fixed-top" />
        </Helmet>
        <nav className="navbar is-info is-fixed-top">
          <div className="navbar-brand" style={brandMargin}>
            <label className="title is-5 has-text-black navbar-item" >Pawful</label>

          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Search />
            </div>
            <div className="navbar-end" style={menuMargin}>
              <NavItem path="/" label="Home" />
              <NavItem path="/profile" label={username} />
              <NavItem icon="fas fa-paw" />
              <NavItem icon={'fas fa-' + animal.toLowerCase()} />
              <NavItem icon="fas fa-bell" />
              <div className={'navbar-item has-dropdown ' + (isActive ? 'is-active' : '')}>

                <Link className="navbar-item" onClick={this.props.toggle}>
                  <span className="icon is-small has-text-black"><i className="fas fa-ellipsis-h"></i></span>
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