import React from 'react';

const alert = (props) => {
  return (
    <div className={'notification is-' + props.status}>
      <button className="delete is-large"></button>
      <p className="subtitle is-size-7">
        {props.children}
      </p>
    </div>
  )
}

export default alert;