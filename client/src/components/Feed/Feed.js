import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Feed extends Component {

  componentDidMount() { 
    const {animal, onFetch, token} = this.props;

    onFetch(animal, token);
  }
  render() {
    return (
      <div className="container">
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animal: state.auth.animal,
    token: state.auth.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (animal, token) => dispatch(actions.fetchPosts(animal, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);