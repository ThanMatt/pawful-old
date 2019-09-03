import React from 'react';
import moment from 'moment'

const comment = (props) => {

  const lineBreak = {
    whiteSpace: 'pre-wrap'
  }

  const { icon, username, content, date } = props.data
  const dateFormat = new Date(date);
  const time = moment(dateFormat).format('h:ma') + ' ' + moment(dateFormat).format('D MMM YYYY') || '';

  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-50x50">
          <img src={'/uploads/' + icon} alt="it u" className="img is-rounded" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p className="has-text-black" style={lineBreak}>
            <span className="has-text-weight-bold is-size-6">
              {username}
            </span>
            <br />
            {content}
          </p>
          <label htmlFor="" className="label has-text-black has-text-weight-light is-size-7" title={time}>{moment(dateFormat).fromNow()}</label>
        </div>
      </div>
    </div>
  )
}

export default comment;