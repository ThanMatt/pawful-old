import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <label className="title is-5 has-text-white navbar-item">Pawful</label>
        </div>
      </nav>
    )
  }
}

export default Navbar;