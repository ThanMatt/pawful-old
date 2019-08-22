import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';


const initialState = {
  username: '',
  error: ''
}

const fetchProfile = (state, action) => {
  return updateObject(state, {
    username: action.payload
  })
}

const fetchProfileFail = (state, action) => {
  return updateObject(state, {
    error: action.payload
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS: return fetchProfile(state, action)
    case actionTypes.FETCH_PROFILE_FAIL: return fetchProfileFail(state, action)
    default: return state
  }
}

export default reducer;


