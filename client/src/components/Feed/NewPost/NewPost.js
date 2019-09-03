import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import MediaLevel from './mediaLevel';
import Textarea from 'react-textarea-autosize';
class NewPost extends Component {
  state = {
    content: '',
    date: ''
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { content } = this.state;
    const { onPostContent, token } = this.props;

    const data = {
      commentId: false,
      content,
      date: new Date()
    }

    onPostContent(data, token)

    this.setState({
      content: ''
    })
  }

  render() {
    const { loading, animal } = this.props;
    const { content } = this.state;
    const message = animal === 'Dog' ? 'bark bark!' : 'meow meow!'
    const textareaStyle = {
      border: 'none',
      outline: 'none',
      resize: 'none',
      boxShadow: 'none'
    }
    return (
      <form onSubmit={this.submitHandler}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <p className="image is-64x64">
                <img className="is-rounded" src={'/uploads/' + this.props.icon} alt="it u" />
              </p>
              <div className="media-content">
                <Textarea
                  cols="30"
                  rows="1"
                  className="textarea"
                  placeholder={'Say something.. I mean, ' + message}
                  style={textareaStyle}
                  name="content"
                  onChange={(event) => this.setState({ content: event.target.value })}
                  value={content}
                />
              </div>
            </div>
            <MediaLevel loading={loading} value={content} />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.post.postLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostContent: (data, token) => dispatch(actions.postContent(data, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);