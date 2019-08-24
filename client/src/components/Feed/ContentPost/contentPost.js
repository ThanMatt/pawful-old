import React from 'react';
import moment from 'moment';
import TabMedia from './tabMedia'
import CommentBox from './commentBox';
const contentPost = (props) => {
  const { icon, username, content, date } = props.data
  const styles = {
    marginTop: '2%',
  }

  const lineBreak = {
    whiteSpace: 'pre-wrap'
  }

  const dateFormat = new Date(date);
  const time = moment(dateFormat).format('h:ma') + ' ' + moment(dateFormat).format('D MMM YYYY')

  return (
    <div className="card" style={styles}>
      <div className="card-content">
        <div className="media">

          <figure className="media-left">
            <p className="image is-64x64">
              <img className="is-rounded" src={'/uploads/' + icon} alt="it u" />
            </p>
          </figure>

          <div className="media-content">
            <div className="content">
              <p style={lineBreak}>
                <strong>{username}</strong>
                <br />
                {content}
              </p>
              <label htmlFor="" className="label has-text-black has-text-weight-light is-size-7" title={time}>{moment(dateFormat).fromNow()}</label>
            </div>
          </div>
        </div>
        <hr />
        <TabMedia />
        <CommentBox icon={icon} />
      </div>
    </div>
  )
}

export default contentPost;