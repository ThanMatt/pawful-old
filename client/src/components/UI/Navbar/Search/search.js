import React from 'react';

const search = (props) => {
  return (
    <div className="navbar-item">
      <div className="control has-icons-left">
        <input className="input is-rounded" size="50" placeholder="Search" />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>

      </div>
    </div>

  )
}

export default search;