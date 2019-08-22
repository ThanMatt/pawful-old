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
    payload: username
  }
}

export const fetchProfileFail = (err) => {
  return {
    type: actionTypes.FETCH_PROFILE_FAIL,
    payload: err
  }
}