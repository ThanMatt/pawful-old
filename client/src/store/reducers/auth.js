import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  email: '',
  username: '',
  token: '',
  isLoading: false,
  error: null,
}

const authFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: action.payload,
  })
}

const authSuccess = (state, action) => {
  const { email, username, token } = action.payload
  return updateObject(state, {
    email,
    username,
    token,
    isLoading: false,
    error: null,
  })
}

const authStart = (state, action) => {
  return updateObject(state, {
    isLoading: true
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    default: return state
  }
}

export default reducer;