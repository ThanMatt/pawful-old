import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';

class Profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <p className="label">Profile</p>
      </>
    )
  }
}

export default Profile