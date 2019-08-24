import React from 'react';
import ProfileStats from './profileStats';

const profileInfo = (props) => {
  const contentStyle = {
    marginTop: '10px'
  }
  return (
    <div className="card">
      <div className="card-content">
        <figure className="image is-96x96 container">
          <img className="is-rounded" src={'/uploads/' + props.icon} alt="it u" />
        </figure>

        <div className="content" style={contentStyle}>
          <label htmlFor="" className="label has-text-black has-text-centered is-size-6">{props.username}</label>
        </div>
        <ProfileStats />
      </div>
    </div>
  )
}

export default profileInfo;