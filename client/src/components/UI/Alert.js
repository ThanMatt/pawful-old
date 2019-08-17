import React from 'react';

const alert = (props) => {
  return (
    <div className={'notification is-' + props.status}>
      {props.children}
    </div>
  )
}

export default alert;