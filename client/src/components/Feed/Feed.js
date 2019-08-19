import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Feed extends Component {

  componentWillMount() {
    this.props.getUsers();
  }

  render() {

    const { loading, usersJoined } = this.props;
    return (
      <div className="container">
        {
          loading ?
            <p>Wait lang</p>
            : usersJoined.map((user, index) => {
              return (
                <p className="label" key={index}>{user.username}</p>
              )
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    usersJoined: state.user.usersJoined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(actions.getUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feed);