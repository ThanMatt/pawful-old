import * as actionTypes from './actions';
import axios from '../../axios-posts'

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START
  }
}

export const fetchFail = (error) => {
  const { message } = error.response.data;

  return {
    type: actionTypes.FETCH_FAIL,
    payload: message
  }
}

export const fetchSuccess = (response) => {
  const { data } = response;
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: data
  }
}

export const fetchPosts = (token) => {
  return dispatch => {
    dispatch(fetchStart());

    axios.get(`/`, {
      headers: {
        authorization: 'Bearer ' + token
      }
    }).then((response) => {
      dispatch(fetchSuccess(response.data))
    }).catch((err) => {
      dispatch(fetchFail(err))
    })
  }
}

export const postContentSuccess = (response) => {
  const { message, content } = response.data;
  return {
    type: actionTypes.POST_CONTENT_SUCCESS,
    payload: {
      message,
      content
    }
  }
}

export const postContentStart = () => {
  return {
    type: actionTypes.POST_CONTENT_START
  }
}

export const postContentFail = (err) => {
  return {
    type: actionTypes.POST_CONTENT_FAIL,
    payload: err
  }
}

export const postContent = (data, token) => {
  const { commentId, content, date } = data;
  console.log(token)
  return dispatch => {
    if (commentId) {
      dispatch(postCommentStart())
      const postData = {
        commentId,
        content,
        date
      }
      axios.post('/comment', postData, {
        headers: {
          authorization: 'Bearer ' + token
        }
      }).then((response) => {
        dispatch(postCommentSuccess(response.data, data.element))
      }).catch((err) => {
        console.log(err);
        dispatch(postCommentFail(err))
      })

    } else {
      const postData = {
        content,
        date
      }
      dispatch(postContentStart())

      axios.post('/new', postData, {
        headers: {
          authorization: 'Bearer ' + token
        }
      }).then((response) => {
        dispatch(postContentSuccess(response))
      }).catch((err) => {
        dispatch(fetchFail(err))
      })

    }

  }
}

export const postCommentSuccess = (response, element) => {
  return {
    type: actionTypes.POST_COMMENT_SUCCESS,
    payload: {
      comment: response.data,
      index: element
    }
  }
}

export const postCommentStart = () => {
  return {
    type: actionTypes.POST_COMMENT_START
  }
}

export const postCommentFail = (err) => {
  return {
    type: actionTypes.POST_COMMENT_FAIL,
    payload: err
  }
}
