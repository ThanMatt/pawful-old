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
  const { email, username, animal, idToken } = response.userData
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

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const auth = (userData, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    if (isSignUp) {
      axios.post('/register', userData)
        .then((response) => {
          dispatch(authSuccess(response.data))
        }).catch((err) => {
          dispatch(authFail(err))
        })
    } else {
      axios.post('/login', userData)
        .then((response) => {
          dispatch(authSuccess(response.data))
        }).catch((err) => {
          dispatch(authFail(err))
        })
    }
  }
}