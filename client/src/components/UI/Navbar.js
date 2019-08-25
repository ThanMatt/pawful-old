import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../store/actions/index';

class Navbar extends Component {
  state = {
    isActive: false
  }
  componentDidMount() {
    this.props.onFetchProfile(this.props.token);
  }

  toggleDropdown = () => {
    const { isActive } = this.state;

    this.setState({
      ...this.state,
      isActive: !isActive
    })
  }
  render() {
    const { username, animal } = this.props;
    const { isActive } = this.state;
    const brandMargin = {
      marginLeft: '9%'
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
              <div className="navbar-item">
                <input className="input is-rounded" size="50" placeholder="Search" />
              </div>
            </div>

            <div className="navbar-end" style={menuMargin}>

              <Link className="navbar-item has-text-black">
                Home
              </Link>

              <Link className="navbar-item has-text-black">
                {username}
              </Link>

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

              <div className={'navbar-item has-dropdown ' + (isActive ? 'is-active' : '')}>

                <Link className="navbar-item" onClick={this.toggleDropdown}>
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