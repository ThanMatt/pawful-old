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