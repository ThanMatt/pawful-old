import * as actionTypes from './actions';
import axios from '../../axios-auth';

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
  const { idToken, expiresIn } = response.userData;
  localStorage.setItem('token', idToken);
  localStorage.setItem('expiresIn', expiresIn);
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: idToken,
      expiresIn,
    }
  }
}

export const authErrorTimeout = () => {
  return {
    type: actionTypes.AUTH_ERROR_TIMEOUT
  }
}

const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(authLogout())
    }


  }
}

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
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