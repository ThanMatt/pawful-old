import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  loading: false,
  error: null,
}

const authFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  })
}

const authErrorTimeout = (state, action) => {
  return updateObject(state, {
    error: null
  })
}

const authLogout = (state, action) => {
  return updateObject(state, {
    email: '',
    username: '',
    token: null
  })
}

const authSuccess = (state, action) => {
  const { token } = action.payload
  return updateObject(state, {
    token,
    loading: false,
    error: null,
  })
}

const authStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    case actionTypes.AUTH_ERROR_TIMEOUT: return authErrorTimeout(state, action);
    default: return state
  }
}

export default reducer;