import React from 'react';

const alert = (props) => {
  return (
    <div className={'notification is-' + props.status}>
      <p className="subtitle has-text-centered is-size-7">
        {props.children}
      </p>
    </div>
  )
}

export default alert;