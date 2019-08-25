import React from 'react';
import { Link } from 'react-router-dom';

const navItem = (props) => {
  return (
    <Link to={props.path} className="navbar-item has-text-black">
      {props.label}
      {props.icon ?
        <span className="icon has-text-black">
          <i className={props.icon}></i>
        </span>
        : ''
      }
    </Link>
  )
}

export default navItem;