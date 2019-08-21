import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  posts: '',
  loading: false,
  error: null
}

const fetchStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const fetchPosts = (state, action) => {
  return updateObject(state, {
    loading: false,
    posts: action.payload
  })
}

const fetchFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload
  })
}

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.payload,
    loading: false
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SUCCESS: return fetchSuccess(state, action)
    case actionTypes.FETCH_POSTS: return fetchPosts(state, action)
    case actionTypes.FETCH_START: return fetchStart(state, action)
    case actionTypes.FETCH_FAIL: return fetchFail(state, action)
    default: return state
  }
}

export default reducer;