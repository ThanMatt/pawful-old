import React from 'react';
import { Link } from 'react-router-dom';

const linkButton = (props) => {
  return (
    <div className="field" {...props.fieldConfig}>
      <div className="control" {...props.controlConfig}>
        <Link to={props.path} className={'button is-rounded has-text-weight-bold ' + (props.className ? props.className : '')}>
          {props.label}
        </Link>
      </div>
    </div>
  )
}

export default linkButton