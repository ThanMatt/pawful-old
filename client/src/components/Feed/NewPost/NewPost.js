import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import MediaLevel from './mediaLevel';

class NewPost extends Component {
  state = {
    content: '',
    date: new Date()
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { content, date } = this.state;
    const { onPostContent, token } = this.props;
    const postData = {
      content,
      date
    }
    onPostContent(postData, token)

    this.setState({
      content: ''
    })
  }
  render() {
    const { loading } = this.props;
    const { content } = this.state;
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
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="it u" />
              </p>
              <div className="media-content">
                <textarea
                  cols="30"
                  rows="2"
                  className="textarea"
                  placeholder="Say something.. I mean, bark bark!"
                  style={textareaStyle}
                  name="content"
                  onChange={(event) => this.setState({ content: event.target.value })}
                  value={content}
                />
              </div>
            </div>
            <MediaLevel loading={loading} />
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
    onPostContent: (postData, token) => dispatch(actions.postContent(postData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);