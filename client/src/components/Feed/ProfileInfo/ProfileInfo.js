import React from 'react';

const profileInfo = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <figure className="image is-96x96">
          <img className="is-rounded" src={'/uploads/' + props.icon} alt="it u" />
        </figure>
        <label htmlFor="" className="label">{props.username}</label>
        <div className="level">
          <div className="level-item has-text-centered">
            {props.animal}
          </div>
        </div>
      </div>
    </div>
  )
}

export default profileInfo;