import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';


const initialState = {
  username: '',
  error: '',
  isVerified: true
}

const fetchProfileSuccess = (state, action) => {
  return updateObject(state, {
    username: action.payload
  })
}

const fetchProfileFail = (state, action) => {
  return updateObject(state, {
    error: action.payload
  })
}

const fetchUserVerifySuccess = (state, action) => {
  return updateObject(state, {
    isVerified: action.payload
  })
}

const fetchUserVerifyFail = (state, action) => {
  return updateObject(state, {
    error: action.payload
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_PROFILE_SUCCESS:
      return fetchProfileSuccess(state, action)

    case actionTypes.FETCH_PROFILE_FAIL:
      return fetchProfileFail(state, action)

    case actionTypes.FETCH_USER_VERIFY_SUCCESS:
      return fetchUserVerifySuccess(state, action)

    case actionTypes.FETCH_USER_VERIFY_FAIL:
      return fetchUserVerifyFail(state, action)
      
    default: return state
  }
}

export default reducer;


