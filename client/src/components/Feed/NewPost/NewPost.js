import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

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
  }
  render() {
    const { loading } = this.props;
    const textareaStyle = {
      border: 'none',
      outline: 'none',
      resize: 'none',
    }
    return (
      <form onSubmit={this.submitHandler}>
        <div className="card">
          <div className="card-content">
            <div className="field">
              <div className="control">
                <div className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="it u" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <textarea
                        cols="30"
                        rows="2"
                        className="textarea"
                        placeholder="Say something.. I mean, bark bark!"
                        style={textareaStyle}
                        name="content"
                        onChange={(event) => this.setState({ content: event.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <button className={'button is-fullwidth has-text-black has-text-weight-bold is-rounded is-info ' + (loading ? 'is-loading' : null)}>Post</button>
              </div>
            </div>
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