import React from 'react';

const profileInfo = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <figure className="image is-96x96">
          <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="it u"/>
        </figure>
        <label htmlFor="" className="label">{props.username}</label>
        <div className="level">
          <div className="level-item has-text-centered">
          </div>
        </div>
      </div>
    </div>
  )
}

export default profileInfo;