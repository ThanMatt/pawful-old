import React from 'react';

const search = (props) => {
  const searchStyle = {
    width: '200%'
  }
  return (
    <div className="navbar-item" style={searchStyle}>
      <div className="control has-icons-left">
        <input className="input is-rounded" size="40" placeholder="Search" />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>

      </div>
    </div>

  )
}

export default search;