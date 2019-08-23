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

export const postSuccess = (response) => {
  const {message, content} = response.data;
  return {
    type: actionTypes.POST_SUCCESS,
    payload: {
      message,
      content
    }
  }
}

export const postStart = () => {
  return {
    type: actionTypes.POST_START
  }
}

export const postFail = (err) => {
  return {
    type: actionTypes.POST_FAIL,
    payload: err
  }
}

export const postContent = (postData, token) => {
  return dispatch => {
    dispatch(postStart())
    axios.post('/new', postData, {
      headers: {
        authorization: 'Bearer ' + token
      }
    }).then((response) => {
      dispatch(postSuccess(response))
    }).catch((err) => {
      dispatch(fetchFail(err))
    })
  }
}