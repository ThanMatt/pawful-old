import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';


class CommentBox extends Component {
  state = {
    content: ''
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { content } = this.state;
    const { id, token, onPostComment, element } = this.props;

    const data = {
      commentId: id,
      content,
      date: new Date(),
      element
    }

    onPostComment(data, token)

    this.setState({
      content: ''
    })

  }

  onEnter = (event) => {

    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.submitHandler(event)
    }
  }

  render() {
    const { content } = this.state
    const textareaStyle = {
      borderRadius: '25px',
      resize: 'none'
    }
    return (
      <form onSubmit={this.submitHandler}>
        <div className="media" >
          <div className="media-left">
            <figure className="image is-50x50">
              <img src={'/uploads/' + this.props.meIcon} alt="it u" className="img is-rounded" />
            </figure>
          </div>
          <div className="media-content">
            <Textarea
              cols="30"
              rows="1"
              className="textarea"
              placeholder='Write a content'
              name="content"
              style={textareaStyle}
              onChange={(event) => this.setState({ content: event.target.value })}
              onKeyDown={this.onEnter}
              value={content}
            />

          </div>
        </div>

      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostComment: (data, token) => dispatch(actions.postContent(data, token))
  }
}

export default connect(null, mapDispatchToProps)(CommentBox);
