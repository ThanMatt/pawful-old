import React from 'react';

const button = (props) => {
  return (
    <div className="field">
      <button className={'button is-rounded has-text-weight-bold ' + (props.className ? props.className : '')}>
        <label htmlFor="" className="is-size-7">
          {props.label}

        </label>
      </button>

    </div>
  )
}

export default button