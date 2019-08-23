import * as actionTypes from './actions';
import axios from '../../axios-users';

export const fetchProfile = (token) => {
  return dispatch => {
    axios.get('/', {
      headers: {
        authorization: 'Bearer ' + token
      }
    }).then((response) => {
      dispatch(fetchProfileSuccess(response.data))
    }).catch((err) => {
      dispatch(fetchProfileFail(err))
    })
  }
}

export const fetchProfileSuccess = (response) => {
  const { username } = response;
  return {
    type: actionTypes.FETCH_PROFILE_SUCCESS,
    payload: username,
  }
}

export const fetchProfileFail = (err) => {
  return {
    type: actionTypes.FETCH_PROFILE_FAIL,
    payload: err
  }
}

//!! Get user email verification status
export const fetchUserVerify = (token) => {
  return dispatch => {
    axios.get('/verify', {
      headers: {
        authorization: 'Bearer ' + token
      }
    }).then((response) => {
      dispatch(fetchUserVerifySuccess(response.data))
    }).catch((err) => {
      dispatch(fetchUserVerifyFail(err))
    })
  }
}

export const fetchUserVerifySuccess = (response) => {
  const { isVerified } = response;
  return {
    type: actionTypes.FETCH_USER_VERIFY_SUCCESS,
    payload: isVerified
  }
}

export const fetchUserVerifyFail = (err) => {
  return {
    type: actionTypes.FETCH_USER_VERIFY_FAIL,
    payload: err
  }
}

