import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  posts: [],
  loading: false,
  postLoading: false,
  error: null,
  message: '',
  post: {},
}

const fetchStart = (state, action) => {
  return updateObject(state, {
    loading: true
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

const postStart = (state, action) => {
  return updateObject(state, {
    postLoading: true
  })
}
const postSuccess = (state, action) => {
  const { message, content } = action.payload
  return updateObject(state, {
    postLoading: false,
    message,
    posts: [content].concat(state.posts)
  })
}

const postFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    postLoading: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS: return fetchSuccess(state, action)
    case actionTypes.FETCH_START: return fetchStart(state, action)
    case actionTypes.FETCH_FAIL: return fetchFail(state, action)
    case actionTypes.POST_SUCCESS: return postSuccess(state, action)
    case actionTypes.POST_START: return postStart(state, action)
    case actionTypes.POST_FAIL: return postFail(state, action)
    default: return state
  }
}

export default reducer;