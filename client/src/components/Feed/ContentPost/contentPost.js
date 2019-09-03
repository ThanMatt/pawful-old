import React, { Component } from 'react';
import moment from 'moment';
import TabMedia from './tabMedia'
import CommentForm from './CommentForm';
import Comment from '../../UI/comment'

class ContentPost extends Component {
  render() {
    const { icon, username, content, date, _id, comments } = this.props.data;

    const styles = {
      marginTop: '2%',
    }

    const lineBreak = {
      whiteSpace: 'pre-wrap'
    }

    const dateFormat = new Date(date);
    const time = moment(dateFormat).format('h:ma') + ' ' + moment(dateFormat).format('D MMM YYYY')
    return (
      <div className="card" style={styles} >
        <div className="card-content">
          <div className="media">

            <figure className="media-left">
              <p className="image is-64x64">
                <img className="is-rounded" src={'/uploads/' + icon} alt="it u" />
              </p>
            </figure>

            <div className="media-content">
              <div className="content">
                <p className="has-text-black" style={lineBreak}>
                  <span className="has-text-weight-bold">{username}</span>
                  <br />
                  {content}
                </p>
                <label htmlFor="" className="label has-text-black has-text-weight-light is-size-7" title={time}>{moment(dateFormat).fromNow()}</label>
              </div>
            </div>
          </div>
          <hr />
          <TabMedia />
          {
            comments.map((comment, index) => {
              return (
                <Comment data={comment} key={index} />
              )
            })
          }
          <CommentForm meIcon={this.props.meIcon} id={_id} token={this.props.token} element={this.props.index} />
        </div>
      </div>
    )
  }

}


export default ContentPost;