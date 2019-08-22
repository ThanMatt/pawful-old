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
  const { idToken } = response.userData;
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: idToken,
    }
  }
}

export const authErrorTimeout = () => {
  return {
    type: actionTypes.AUTH_ERROR_TIMEOUT
  }
}


export const authCheckTimeout = (expiresIn) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout())
    }, expiresIn * 1000)
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(authLogout())
    } else {

      const expireTime = new Date(localStorage.getItem('expiresIn'));
      const currentTime = new Date();

      if (currentTime >= expireTime) {
        dispatch(authLogout())
      } else {

        const expiresIn = (expireTime.getTime() - currentTime.getTime()) / 1000
        const response = {
          userData: {
            idToken: token,
          }
        }
        dispatch(authCheckTimeout(expiresIn))
        dispatch(authSuccess(response))
      }
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
          const { expiresIn, idToken } = response.data.userData;
          const expirationTime = new Date(new Date().getTime() + (expiresIn * 1000))

          localStorage.setItem('token', idToken);
          localStorage.setItem('expiresIn', expirationTime);

          console.log(expirationTime.getTime());
          dispatch(authSuccess(response.data))
        }).catch((err) => {
          dispatch(authFail(err))
        })
    }
  }
}