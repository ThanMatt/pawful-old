import * as actionTypes from './actions';
import axios from '../../axios-user';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authFail = (error) => {
  const { message } = error.response.data;
  return {
    type: actionTypes.AUTH_FAIL,
    payload: message
  }
}

export const authSuccess = (response) => {
  const {email, username, animal, idToken} = response.userData
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      email,
      username,
      animal,
      token: idToken
    }
  }
}

export const auth = (email, password) => {
  return dispatch => {
    axios.post('/login', {
      email,
      password
    }).then((response) => {
      dispatch(authSuccess(response.data))
    }).catch((err) => {
      dispatch(authFail(err))
    })
  }
}